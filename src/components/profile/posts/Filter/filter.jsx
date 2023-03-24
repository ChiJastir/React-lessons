import React from 'react';
import Input from "../../../../UI/Input/input";
import s from "./filter.module.css";
import Select from "../../../../UI/Select/select";
import {usePosts} from "../../../../hooks/usePosts";

const Filter = ({filter, setFilter, data, setSearchedAndSortedPosts}) => {

    setSearchedAndSortedPosts(usePosts(data, filter.sort, filter.search))

    return (
        <div className={s.filter}>
            <Input
                placeholder="Поиск"
                value={filter.search}
                onChange={event => setFilter({...filter, search: event.target.value})}
                className={s.input}
            />
            <Select
                className={s.select}
                heading={'Сортировка'}
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По содержанию'},
                ]}
                value={filter.sort}
                sortPost={key => setFilter({...filter, sort: key})}
            />
        </div>
    );
};

export default Filter;