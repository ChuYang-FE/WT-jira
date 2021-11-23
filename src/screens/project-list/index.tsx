import React, { useState, useEffect } from 'react';
import qs from 'qs';

import { List } from './List';
import { SearchPanel } from './SearchPanel';

import { cleanObject } from '../../utils/index';
import { useMount, useDebounce } from '../../utils';

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });

  useMount(() => {
    getList('users', setUsers);
  });

  const debounceParam = useDebounce(param, 200);

  useEffect(() => {
    getList('projects', setList);
  }, [debounceParam]);

  const getList = (type: string, callBack: any): void => {
    fetch(`${apiUrl}/${type}?${qs.stringify(cleanObject(debounceParam))}`).then(
      async (res) => {
        if (res.ok) {
          const resList = await res.json();
          callBack(resList);
        }
      },
    );
  };

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
