import { apiArticles } from "./api";

export const ArticlesApi = apiArticles.injectEndpoints({
    endpoints: (builder) => ({
        createArticles: builder.mutation({
            query: (articles) => ({
                body: articles,
                url: "/",
                method: "POST",
            }),
        }),
    }),
});
