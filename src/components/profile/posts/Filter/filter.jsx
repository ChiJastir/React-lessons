import React, {useMemo} from 'react';
import Input from "../../../../UI/Input/input";
import s from "./filter.module.css";
import Select from "../../../../UI/Select/select";

const Filter = ({filter, setFilter, data, setSearchedAndSortedPosts}) => {

    const sortedPost = useMemo(() => {
        if (filter.sort)
            return [...data].sort((a, b) => String(a[filter.sort]).localeCompare(String(b[filter.sort])))
        return data
    }, [filter.sort, data])

    const searchedAndSortedPosts = useMemo(() => {
        return sortedPost.filter(post => post.content.toLowerCase().includes(filter.search.toLowerCase()))
    }, [filter.search, sortedPost])

    setSearchedAndSortedPosts(searchedAndSortedPosts)

    return (
        <div>
            <Input
                placeholder="Поиск"
                value={filter.search}
                onChange={event => setFilter({...filter, search: event.target.value})}
                className={s.input}
            />
            <Select
                heading={'Сортировка'}
                options={[
                    {value: 'id', name: 'По номеру'},
                    {value: 'content', name: 'По содержанию'},
                ]}
                value={filter.sort}
                sortPost={key => setFilter({...filter, sort: key})}
            />
        </div>
    );
};

export default Filter;