"use server"

import { insertSession } from "@/app/lib/session";
import { baseApi } from "@/lib/api/endpoint";
import { LoginCredentials } from "@/types/auth/login";

export async function signIn (newData: LoginCredentials): Promise<LoginCredentials> {
    try {
        const response = await baseApi.post('/api/auth/login', newData)
        const accessToken = response.data.data.token;

        insertSession(accessToken);

        return response.data;
    } catch (err) {
        console.error("Login error: ", err)
        throw new Error('Failed to Login')
    }
}

// 'use server';

// import { z } from 'zod';
// import { cookies } from 'next/headers';
// import { redirect } from 'next/navigation';

// const SignInSchema = z.object({
//     email: z.string().email('Invalid email address'),
//     password: z.string().min(6, 'Password must be at least 6 characters'),
// });

// export async function signIn(formData: FormData) {
//   const validatedFields = SignInSchema.safeParse({
//     email: formData.get('email'),
//     password: formData.get('password'),
//   });

//   if (!validatedFields.success) {
//     return {
//       status: 400,
//       message: 'Validation error',
//       errors: validatedFields.error.flatten().fieldErrors,
//     };
//   }

//   try {
//     const response = await fetch('http://localhost:5050/api/auth/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(validatedFields.data),
//     });

//     const data = await response.json();

//     if (data.status === 200) {
//       cookies().set('token', data.data.token, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         sameSite: 'strict',
//         maxAge: 60 * 60 * 24 * 7, // 1 week
//       });
//     } else {
//         console.log(data)
//       return {
//         status: data.status,
//         message: data.message,
//       };
//     }
//   } catch (err) {
//     console.error("[AUTH ERROR]: ", err)
//     return {
//       status: 500,
//       message: 'Internal server error',
//     };
//   }

// //   redirect('/super-admin/dashboard');
// }