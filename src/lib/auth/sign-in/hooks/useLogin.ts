import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Login } from "../dto/login-dto";
import { loginAction } from "../actions/login-action";

export function useLogin() {
    const router = useRouter();

    return useMutation({
        mutationFn: async (newUser: Login) => loginAction(newUser),
        onSuccess: (token) => {
            // localStorage.setItem("token", token);

            router.push("/admin");
        },
        onError: (error) => {
            console.error("Login failed: ", error)
            alert("Login failed. Please check credentials.")
        }
    })
}