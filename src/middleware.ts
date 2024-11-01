import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./app/lib/session";

const protectedRoutes = ["/super-admin/dashboard"];
const publicRoutes = ["/sign-in", "sign-up"]

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const isProtectedRuote = protectedRoutes.includes(path);
    const isPublicRuote = publicRoutes.includes(path);

    const cookie = cookies().get("accessToken")?.value;
    const session = await decrypt(cookie);

    if(isProtectedRuote && !session?.userId)
        return NextResponse.redirect(new URL("/sign-in", req.nextUrl))

    if(isPublicRuote && session?.userId)
        return NextResponse.redirect(new URL("/super-admin/dashboard", req.nextUrl))

    return NextResponse.next();
}


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

export const config = {
    matcher: [
        '/super-admin/:path*',
        '/sign-in'
    ]
}