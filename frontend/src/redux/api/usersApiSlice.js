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
        
        getUsers: builder.query({
            query: () => ({
              url: `${USERS_URL}`,
            }),
            providesTags: ['User'],
            keepUnusedDataFor:5
          }),

          deleteUsers: builder.mutation({
            query: userId => ({
                  url: `${USERS_URL}/${userId}`,
                method:"DELETE"
            }),
          }),

          getUserDetails: builder.query({
            query: (id) => ({
              url: `${USERS_URL}/${id}`,
            }),
            keepUnusedDataFor:5
          }),

          updateUsers: builder.mutation({
            query: data => ({
                  url: `${USERS_URL}/${data.userId}`,
                  method: "PUT",
                body:data
              }),
              invalidatesTags:["User"]
          }),

    })
})

//`use${Login}Mutation`

export const {
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation,
    useProfileMutation,
    useGetUsersQuery,
    useDeleteUsersMutation,
    useGetUserDetailsQuery,
    useUpdateUsersMutation,

   } = usesrApiSlice

//1: http://localhost:5000   2:/api/users/auth