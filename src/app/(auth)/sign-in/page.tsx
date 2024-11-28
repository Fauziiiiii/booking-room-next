"use client";

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import googleSvg from "@/public/img/google-color-icon.svg"
import { useSignIn } from '@/lib/auth/sign-in/hooks/useSignIn';
import { Icons } from '@/components/icons';
import { InputCustom } from '@/components/ui/input-custom';

const SignInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type SignInFormInputs = z.infer<typeof SignInSchema>;

const SignInPage = () => {
  const { mutate, isPending } = useSignIn();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<SignInFormInputs>({
    resolver: zodResolver(SignInSchema),
  });

  const onSubmitSignIn = async (data: SignInFormInputs) => {
    try{
        mutate(data, {
            onSuccess: () => {
                reset();
            },
        })
    }catch(err) {
        console.error("error sign in cik", err)
    }
};

  return (
    <form
      onSubmit={handleSubmit(onSubmitSignIn)}
      className="w-full max-w-md space-y-6 justify-center"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Welcome Back!</h1>
        <p className="text-gray-600 text-sm sm:text-base">Enter your credentials to access your account.</p>
      </div>

      {/* Input Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <InputCustom
          id="email"
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          className="mt-1 block w-full px-4 py-3 border rounded-md"
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>

      {/* Input Password */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <InputCustom
          id="password"
          type="password"
          placeholder="••••••••"
          {...register("password")}
          className="mt-1 block w-full px-4 py-3 border rounded-md"
        />
        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="flex justify-between items-center text-sm">
        <label className="flex items-center space-x-2 mb-2 sm:mb-0">
          <input type="checkbox" className="form-checkbox accent-teal-400" />
          <span>Remember me</span>
        </label>
        <a href="#" className="text-teal-600 hover:underline">Forgot password?</a>
      </div>

      {/* Tombol Sign In */}
      <Button
        type="submit"
        className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-md"
        disabled={isPending}
      >
        {isPending ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin text-teal-400" />
            ) : null}
        Sign In
      </Button>

      {/* Sign in with Google */}
      <Button
        variant="outline"
        className="w-full flex items-center justify-center py-3 mt-2"
      >
        <Image 
          src={googleSvg}
          alt="Google Icon"
          className="h-5 w-5"
          width={10}
          height={10}
          priority
        />
        Sign in with Google
      </Button>

      {/* Daftar Akun */}
      <div className="text-center text-sm mt-4">
        <p>
          Don’t have an account?{" "}
          <a href="#" className="text-teal-600 hover:underline">Sign up</a>
        </p>
      </div>
    </form>
  );
};

export default SignInPage;
