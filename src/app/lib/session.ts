import 'server-only'

import { SignJWT, jwtVerify} from 'jose'
import { cookies } from 'next/headers'
import { JWSInvalid, JWTExpired } from 'jose/errors'

type SessionPayload = {
    userId: string;
    expiresAt: Date;
}

if (!process.env.JWT_SECRET_KEY) {
    throw new Error('JWT_SECRET_KEY is not defined in environment variables');
}

const secretKey = process.env.JWT_SECRET_KEY;
const encodedKey = new TextEncoder().encode(secretKey)

export async function getSession() {
    const session = cookies().get('session')?.value;
    if(!session) return null;
    return await decrypt(session);
}

export async function createSession(userId: string) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const session = await encrypt({userId, expiresAt});

    cookies().set("accessToken", session, { 
        httpOnly: true,
        secure: process.env.ENVIRONMENT === "production",
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7
    });

    return { status: true, session}
}

export async function insertSession(token: string) {
    cookies().set("accessToken", token, {
        httpOnly: true,
        secure: process.env.ENVIRONMENT === "production",
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7
    });
}

export async function getRoleFromToken(token: string): Promise<string | null>{
    try{
        const { payload } = await jwtVerify(token, encodedKey, {
            algorithms: ['HS256']
        });

        const role = payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] as string;

        return role || null;
    }catch(err){
        console.error("[ERROR] Error verifying token: ", err);
        return null;
    }
}

export async function deleteSession() {
    cookies().delete('accessToken')
}

export async function encrypt(payload: SessionPayload) {
    const expiresAt = payload.expiresAt;
    return new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime(expiresAt.getTime())
        .sign(encodedKey)
}

export async function decrypt(session: string | undefined = "") {
    try {
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ["HS256"],
        });
        return payload;
    } catch(err) {
        if (err instanceof JWSInvalid) {
            console.log(`Invalid token: ${err.message}`)
          } else if (err instanceof JWTExpired) {
            console.log(`Token expired: ${err.message}`)
          } else {
            console.log(`Error verifying token: ${err}`)
          }
    }
}