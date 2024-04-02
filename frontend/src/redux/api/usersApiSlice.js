import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../constants";

export const usesrApiSlice = apiSlice.injectEndpoints({
    endpoints: (buider) => ({
        login: buider.mutation({        
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: "POST",
                body:data,
            })
        }),

        logout: buider.mutation({        
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: "POST",
                
            }),
        })
    })
})

//`use${Login}Mutation`

export const {useLoginMutation,useLogoutMutation} = usesrApiSlice

//1: http://localhost:5000   2:/api/users/auth