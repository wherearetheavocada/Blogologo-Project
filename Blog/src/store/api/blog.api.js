import { apiBlog } from "./api";

export const blogApi = apiBlog.injectEndpoints({
    endpoints: (builder) => ({
        createBlog: builder.mutation({
            query: (blog) => ({
                body: blog,
                url: "/",
                method: "POST",
            }),
        }),
    }),
});
