import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://api.open-notify.org" }),
    tagTypes: ["Position", "Astronauts"],
    endpoints: (builder) => ({
        getIssPosition: builder.query({
            query: () => "/iss-now.json",
            providesTags: ["Position"]
        }),
        getAstronauts: builder.query({
            query: () => "/astros.json",
            providesTags: ["Astronauts"]
        })
    })
});

export const {
    useGetIssPositionQuery,
    useGetAstronautsQuery,
    util: { invalidateTags }
} = apiSlice;
