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
        })
    })
})

//`use${Login}Mutation`

export const {useLoginMutation} = usesrApiSlice

//1: http://localhost:5000   2:/api/users/auth