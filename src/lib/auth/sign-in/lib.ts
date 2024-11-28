import { jwtVerify, SignJWT } from 'jose'
// import { decodeReply } from 'next/dist/server/app-render/entry-base';
import { cookies } from 'next/headers';

const secretKey = process.env.JWT_SECRET_KET;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(key);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function dcrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ['HS256'],
    });
    return payload;
}

export async function login(formData: FormData) {
    const user = { email: formData.get('email'), name: "John"}

    const expires = new Date(Date.now() + 10 * 1000);
    const session = await encrypt({ user, expires })

    cookies().set('session', session, { expires, httpOnly: true });
}

export async function logout() {
    cookies().set('session', '', { expires: new Date(0) })
}