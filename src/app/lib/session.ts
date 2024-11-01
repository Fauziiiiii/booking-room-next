import 'server-only'
import { SignJWT, jwtVerify} from 'jose'
import { cookies } from 'next/headers'
import { JWSInvalid, JWTExpired } from 'jose/errors'

if (!process.env.JWT_SECRET_KEY) {
    throw new Error('JWT_SECRET_KEY is not defined in environment variables');
  }

const secretKey = process.env.JWT_SECRET_KEY;
const encodedKey = new TextEncoder().encode(secretKey)

// export async function createSession(userId: string) {
//     const headersList = headers()
//     const protocol = headersList.get('x-forwarded-proto') || 'http'
//     const isSecure = process.env.ENVIRONMENT === 'production' || protocol === 'https'
//     const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 1 week
//     const session = await encrypt({userId, expiresAt});

//     console.log("createSession token: ", session)
    
//     cookies().set("accessToken", session, { 
//         httpOnly: true,
//         secure: isSecure,
//         sameSite: 'lax',
//         path: '/',
//         maxAge:  60 * 60 * 24 * 7 // 1 week
//     });

//     return { status: true, session}
// }

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

export async function deleteSession() {
    cookies().delete('accessToken')
}

type SessionPayload = {
    userId: string;
    expiresAt: Date;
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