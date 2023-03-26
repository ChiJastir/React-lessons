import {useMemo} from "react";

export const usePages = (totalPage) => {
    const pages = useMemo(() => {
        const array = []
        for (let i = 0; i < totalPage; i++) {
            array.push(i+1)
        }
        return array
    }, [totalPage])
    return pages
}