import { commonApi } from "./commonApi";

const authApi = commonApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: `auth/login`,
                method: "POST",
                body,
            }),
            invalidatesTags: ["User"],
        }),
        register: builder.mutation({
            query: (body) => ({
                url: `auth/register`,
                method: "POST",
                body,
            }),
            invalidatesTags: ["User"],
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
