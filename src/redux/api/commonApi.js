import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
let BASE_URL = "process.env.REACT_APP_API_URL";
if ("process.env.NODE_ENV" === 'development') {
    BASE_URL = 'http://localhost:5000';
}
const requestConfig = {
    mode: 'cors',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json',
    },
};

export const commonApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        // if endpoint is cover image or gallery image then remove content type
        prepareHeaders: (headers, { getState }, api) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `${token}`);
            }
            //headers.set('Content-Type', 'application/json');
            return headers;
        },
        ...requestConfig,
    }),
    tagTypes: ['Auth'],
    endpoints: _ => ({}),
});