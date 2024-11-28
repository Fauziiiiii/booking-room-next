import { useMutation } from "@tanstack/react-query";
import { signIn } from "../actions/signIn";
import { toast } from "sonner";
import { LoginCredentials } from "@/types/auth/login";
import { useRouter } from "next/navigation";

export function useSignIn() {
  const router = useRouter();
  
  return useMutation({
      mutationFn: async (newUser: LoginCredentials) => signIn(newUser),
      onSuccess: () => {
          toast.success("Successfully sign in action")
          router.push("/home")
      },
      onError: (error) => {
          console.error("Login failed: ", error)
          toast.error("Error, please check the credentials")
      }
  });
}

// import { useMutation } from '@tanstack/react-query';
// import { signIn } from '../actions/signIn';

// export interface SignInCredentials {
//   email: string;
//   password: string;
// }

// export interface SignInResponse {
//   status: number;
//   message: string;
//   data: {
//     email: string;
//     token: string;
//   };
// }

// export const useAuth = () => {
//   const mutation = useMutation<SignInResponse, Error, SignInCredentials>({
//     mutationFn: signIn,
//     onSuccess: (data) => {
//       // Simpan token di localStorage atau secure storage
//       localStorage.setItem('token', data.data.token);
      
//       // Redirect atau update state authentication
//     },
//     onError: (error) => {
//       console.error('Login failed:', error);
//     }
//   });

//   return mutation;
// };