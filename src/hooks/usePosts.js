import {useMemo} from "react";

export const useSortedPost = (data, sort) => {
    const sortedPost = useMemo(() => {
        if (sort)
            return [...data].sort((a, b) => String(a[sort]).localeCompare(String(b[sort])))
        return data
    }, [sort, data])

    return sortedPost
}

export const usePosts = (data, sort, search) => {
    const sortedPost = useSortedPost(data, sort)

    const searchedAndSortedPosts = useMemo(() => {
        return sortedPost.filter(post => post.content.toLowerCase().includes(search.toLowerCase()))
    }, [search, sortedPost])

    return searchedAndSortedPosts
}