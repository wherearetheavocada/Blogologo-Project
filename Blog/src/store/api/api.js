import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL_BLOG = "https://api.spaceflightnewsapi.net/v4/blogs/";
const API_URL_ARTICLES = "https://api.spaceflightnewsapi.net/v4/articles/";

// export const apiBlog = createApi({
//     reducerPath: "apiBlog",
//     tagTypes: ["blog"],
//     baseQuery: fetchBaseQuery({
//         baseUrl: API_URL_BLOG,
//     }),
//     endpoints: (builder) => ({
//         getBlogs: builder.query({
//             query: (searchTerm) => "/q=${searchTerm}",
//         }),
//         getBlog: builder.query({
//             query: (id) => "/" + id, // api back
//             providesTags: (result, error, searchTerm) => [
//                 {
//                     type: "blog",
//                     id: searchTerm,
//                 },
//             ],
//         }),
//     }),
// });
export const apiBlog = createApi({
    reducerPath: "apiBlog",
    tagTypes: ["blog"],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL_BLOG,
    }),
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: ({ search, page = 0, limit = 9, minData, maxData }) =>
                `?search=${search}&offset=${
                    page * limit
                }&limit=${limit}&published_at_gte=${minData}&published_at_lte=${maxData}`,
        }),
        getBlog: builder.query({
            query: (id, { limit = 3 }) =>
                "/" + id`&offset=${page * limit}&limit=${limit}`, // api back
            providesTags: (result, error, searchTerm) => [
                {
                    type: "blog",
                    id: searchTerm,
                },
            ],
        }),
    }),
});

export const apiArticles = createApi({
    reducerPath: "apiArticles",
    tagTypes: ["articles"],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL_ARTICLES,
    }),
    endpoints: (builder) => ({
        getArticles: builder.query({
            query: () => "/",
        }),
        getArticle: builder.query({
            query: (id) => "/" + id, // api back
        }),
    }),
});

export const { useGetBlogQuery, useGetBlogsQuery } = apiBlog;
export const { useGetArticleQuery, useGetArticlesQuery } = apiArticles;
