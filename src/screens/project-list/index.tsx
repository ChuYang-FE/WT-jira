import { useState, useEffect } from 'react';

import { List } from './List';
import { SearchPanel } from './SearchPanel';

import { cleanObject } from '../../utils/index';
import { useHttp } from '../../utils/http';
import { useMount, useDebounce } from '../../utils';

export const ProjectListScreen: React.FC = () => {
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });

  const getData = useHttp();

  useMount(() => {
    getData('users').then(setUsers);
  });

  const debounceParam = useDebounce(param, 200);

  useEffect(() => {
    getData('projects', { data: cleanObject(debounceParam) }).then(setList);
  }, [debounceParam]);

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
