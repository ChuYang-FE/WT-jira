import React, { useState, useEffect } from 'react';
import SearchPanel from './SearchPanel';
import List from './List';

const apiUrl = process.env.REACT_APP_API_URL;

export default function ProjectListScreen() {
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    getList(param);
  }, [param]);

  const getList = () => {
    fetch(`${apiUrl}`).then(res => {
      setList(res.data);
    });
  };

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam}/>
      <List users={users} data={list}/>
    </div>
  );
}
