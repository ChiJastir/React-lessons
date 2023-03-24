import React, {useMemo} from 'react';
import Input from "../../../../UI/Input/input";
import s from "./filter.module.css";
import Select from "../../../../UI/Select/select";
import {usePosts} from "../../../../hooks/usePosts";

const Filter = ({filter, setFilter, data, setSearchedAndSortedPosts}) => {

    setSearchedAndSortedPosts(usePosts(data, filter.sort, filter.search))

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