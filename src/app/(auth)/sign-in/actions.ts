"use server"

import { createSession, deleteSession } from "@/app/lib/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const userDB = {
  id: "userId123",
  email: "fauzi@gmail.com",
  password: "fauzi123",
};

type formType = {
  email: string;
  password: string;
}

export async function signIn(data: formType) {
    try {
        if (data.email === userDB.email && data.password === userDB.password) {
            await createSession(userDB.id);
            
            // let redirectPath: string | null = null
            const sessionCookie = cookies().get('accessToken');
            if (!sessionCookie) {
                throw new Error("Failed to create session");
            }

            // const searchParams = new URL(formData.get('callbackUrl')?.toString() || '/super-admin/dashboard', process.env.NEXT_PUBLIC_APP_URL).searchParams
            // const callbackUrl = searchParams.get('callbackUrl') || '/super-admin/dashboard'

            // window.localStorage.setItem("token", "tokenABCSDCD");
            
            return redirect('/super-admin/dashboard');
        } else {
            throw new Error("Invalid email or password");
        }
    } catch (err) {
        console.error("Sign in error:", err);
        throw err;
    }
}

export async function logout() {
    await deleteSession();
    redirect('/sign-in')
}
