import React, { useState, useEffect } from 'react';
import { useMount, useDebounce } from '../../utils';
import qs from 'qs';

import SearchPanel from './SearchPanel';
import List from './List';

import { cleanObject } from '../../utils/index.js';

// eslint-disable-next-line no-undef
const apiUrl = process.env.REACT_APP_API_URL;

export default function ProjectListScreen() {
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });

  useMount(() => {
    getList('users', setUsers);
  });

  const debounceParam = useDebounce(param, 500);

  useEffect(() => {
    getList('projects', setList);
  }, [debounceParam]);

  const getList = (type, callBack) => {
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
}
