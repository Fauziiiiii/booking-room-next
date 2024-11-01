import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createUser } from "../actions/create-user"
import { CreateUserDTO } from "../dto/create-user-dto"

export const useCreateUser = () => {
    const queryClient = useQueryClient()
    
    return useMutation({
        mutationFn: async (newUser: CreateUserDTO) => await createUser(newUser),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["get-all-user"]})
        },
        onError: (err) => {
            console.error("Error creating user: ", err);
            throw err;
        }
    })
}

// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { createUser } from '../actions/create-user';
// import { CreateUserDTO } from '../dto/create-user-dto';

// const useCreateUser = () => {
//   const queryClient = useQueryClient();

//   return useMutation(
//     async (newUser: CreateUserDTO) => {
//       const user = await createUser(newUser);
//       return user;
//     },
//     {
//       onSuccess: (user) => {
//         queryClient.invalidateQueries('get'); // invalidate cache untuk users
//         console.log('User created successfully:', user);
//       },
//       onError: (error) => {
//         console.error('Error creating user:', error);
//       },
//     }
//   );
// };

// export default useCreateUser;
