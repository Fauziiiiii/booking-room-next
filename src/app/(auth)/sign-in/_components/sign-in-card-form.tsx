"use client"

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from '../actions';
// import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SignInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type SignInFormInputs = z.infer<typeof SignInSchema>;

const SignInCardForm = () => {
    // const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { register, handleSubmit, formState: {errors}} = useForm<SignInFormInputs>({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmitSignIn = async (data: SignInFormInputs) => {
        setIsLoading(true);
        setError(null);
        
        try {
            await signIn(data);
        } catch (err) {
            setError('Login gagal. Silakan coba lagi.');
            console.error('Login error:', err);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <Card>
            <form onSubmit={handleSubmit(onSubmitSignIn)}>
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Sign in into your account</CardTitle>
                    <CardDescription>
                    Enter your email below to Sign in into your account
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid grid-cols-2 gap-6">
                    <Button variant="outline">
                        <Icons.gitHub className="mr-2 h-4 w-4" />
                        Github
                    </Button>
                    <Button variant="outline">
                        <Icons.google className="mr-2 h-4 w-4" />
                        Google
                    </Button>
                    </div>
                    <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                        </span>
                    </div>
                    </div>
                    <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" {...register("email")}/>
                    {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                    </div>
                    <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" {...register("password")} />
                    {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                    </div>
                    {error && (
                        <div className="text-red-500 text-sm">{error}</div>
                    )}
                </CardContent>
                <CardFooter>
                    <Button 
                        className="w-full" 
                        type="submit" 
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        ) : null}
                        Sign In
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}

export default SignInCardForm;



// "use client";

// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { Button } from '@/components/ui/button';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// const SignInSchema = z.object({
//   email: z.string().email('Invalid email address'),
//   password: z.string().min(6, 'Password must be at least 6 characters'),
// });

// type SignInFormInputs = z.infer<typeof SignInSchema>;

// const SignInCardForm = () => {
//   const [error, setError] = useState<string | null>(null);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<SignInFormInputs>({
//     resolver: zodResolver(SignInSchema),
//   });

//   const onSubmit = async (data: SignInFormInputs) => {
//     setError(null);
//     try {
//       const res = await fetch('/api/auth', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       if (!res.ok) {
//         const { error } = await res.json();
//         setError(error);
//         return;
//       }

//       // Redirect or refresh page after successful sign-in
//       window.location.href = '/dashboard';
//     } catch (err) {
//       setError(`Something went wrong. Please try again. ${err}`);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Card>
//         <CardHeader className="space-y-1">
//           <CardTitle className="text-2xl">Sign-In into your account</CardTitle>
//           <CardDescription>Enter your email and password to sign in.</CardDescription>
//         </CardHeader>
//         <CardContent className="grid gap-4">
//           <div className="grid gap-2">
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               type="email"
//               placeholder="m@example.com"
//               {...register('email')}
//             />
//             {errors.email && <p className="text-red-600">{errors.email.message}</p>}
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="password">Password</Label>
//             <Input id="password" type="password" {...register('password')} />
//             {errors.password && <p className="text-red-600">{errors.password.message}</p>}
//           </div>
//           {error && <p className="text-red-600">{error}</p>}
//         </CardContent>
//         <CardFooter>
//           <Button type="submit" className="w-full" disabled={isSubmitting}>
//             Sign In
//           </Button>
//         </CardFooter>
//       </Card>
//     </form>
//   );
// };

// export default SignInCardForm;