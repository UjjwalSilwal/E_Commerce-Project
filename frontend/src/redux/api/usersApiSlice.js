import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../constants";

export const usesrApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({        
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: "POST",
                body:data,
            })
        }),

        logout: builder.mutation({        
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: "POST",
                
            })
        }),

        register: builder.mutation({        
            query: (data) => ({
                url: `${USERS_URL}`,
                method: "POST",
                body:data,
            })
        }),

        profile: builder.mutation({
            query: (data) => ({
              url: `${USERS_URL}/profile`,
              method: "PUT",
              body: data,
            }),
          }),

    })
})

//`use${Login}Mutation`

export const { useLoginMutation
    , useLogoutMutation
    , useRegisterMutation
    ,useProfileMutation
    } = usesrApiSlice

//1: http://localhost:5000   2:/api/users/auth