// import { cookies } from "next/headers";
// import { NextRequest, NextResponse } from "next/server";
// import { decrypt } from "./app/lib/session";

// const protectedRoutes = ["/super-admin/dashboard"];
// const publicRoutes = ["/sign-in", "sign-up"]

// export default async function middleware(req: NextRequest) {
//     const path = req.nextUrl.pathname;
//     const isProtectedRuote = protectedRoutes.includes(path);
//     const isPublicRuote = publicRoutes.includes(path);

//     const cookie = cookies().get("accessToken")?.value;
//     const session = await decrypt(cookie);

//     if(isProtectedRuote && !session?.userId)
//         return NextResponse.redirect(new URL("/sign-in", req.nextUrl))

//     if(isPublicRuote && session?.userId)
//         return NextResponse.redirect(new URL("/super-admin/dashboard", req.nextUrl))

//     return NextResponse.next();
// }


// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export function middleware(request: NextRequest) {
//     const session = request.cookies.get('session');
//     const url = request.nextUrl.clone();

//     console.log('Current path:', url.pathname);
//     console.log('Session cookie:', session);

//     const authRequiredPaths = ['/super-admin'];
//     const isAuthRequired = authRequiredPaths.some(path => 
//         url.pathname.startsWith(path)
//     );

//       // Jika tidak ada session dan path membutuhkan auth
//       if (!session && isAuthRequired) {
//         url.pathname = '/sign-in';
//         return NextResponse.redirect(new URL("/sign-in", request.nextUrl))
//     }

//     // Jika ada session dan mencoba mengakses sign-in
//     if (session && url.pathname === '/sign-in') {
//         url.pathname = '/super-admin/dashboard';
//         return NextResponse.redirect(url);
//     }

//     const response = NextResponse.next();

//     // Tambahkan headers keamanan
//     response.headers.set('X-Frame-Options', 'DENY');
//     response.headers.set('X-Content-Type-Options', 'nosniff');
//     response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

//     return response;
// }

// export const config = {
//     matcher: [
//         '/super-admin/:path*',
//         '/sign-in'
//     ]
// }


import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const secretKey = process.env.JWT_SECRET_KEY!;
const encodedKey = new TextEncoder().encode(secretKey);

export async function middleware(request: NextRequest) {
    const token = request.cookies.get('accessToken')?.value;

    const authPaths = ['/sign-in', '/sign-up'];
    const protectedPaths = {
        user: ['/home', '/profile', '/yourorder', '/settings'],
        admin: ['/admin/dashboard', '/admin/users', '/admin/reports'],
        superAdmin: ['/super-admin/dashboard', '/super-admin/management', '/super-admin/system-config', '/super-admin/user']
    };

    const isAuthPath = authPaths.some(path => request.nextUrl.pathname.startsWith(path));

    if (token) {
        try {
            const { payload } = await jwtVerify(token, encodedKey, {
                algorithms: ["HS256"]
            });

            const userRole = payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] as string;

            if (isAuthPath) {
                switch (userRole) {
                    case 'User':
                        return NextResponse.redirect(new URL('/home', request.url));
                    case 'Admin':
                        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
                    case 'Super Admin':
                        return NextResponse.redirect(new URL('/super-admin/dashboard', request.url));
                    default:
                        return NextResponse.redirect(new URL('/home', request.url));
                }
            }

            const checkProtectedPath = (paths: string[]) => 
                paths.some(path => request.nextUrl.pathname.startsWith(path));

            switch (userRole) {
                case 'User':
                    if (checkProtectedPath(protectedPaths.admin) || checkProtectedPath(protectedPaths.superAdmin)) {
                        return NextResponse.redirect(new URL('/unauthorized', request.url));
                    }
                    break;
                
                case 'Admin':
                    if (!request.nextUrl.pathname.startsWith('/admin/')) {
                        return NextResponse.redirect(new URL('/unauthorized', request.url));
                    }
                    break;
                
                case 'Super Admin':
                    if (!request.nextUrl.pathname.startsWith('/super-admin/')){
                        return NextResponse.redirect(new URL('/unauthorized', request.url));
                    }
                    break;
                
                default:
                    return NextResponse.redirect(new URL('/sign-in', request.url));
            }

            return NextResponse.next();
        } catch (error) {
            console.error("[ERROR]: ", error)
            return NextResponse.redirect(new URL('/sign-in', request.url));
        }
    }

    if (isAuthPath) {
        return NextResponse.next();
    }

    const checkProtectedPath = (paths: string[]) => 
        paths.some(path => request.nextUrl.pathname.startsWith(path));

    if (
        checkProtectedPath(protectedPaths.user) || 
        checkProtectedPath(protectedPaths.admin) || 
        checkProtectedPath(protectedPaths.superAdmin)
    ) {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/sign-in',
        '/sign-up',
        '/home',
        '/profile',
        '/yourorder',
        '/settings',
        '/admin/:path*',
        '/super-admin/:path*'
    ]
}