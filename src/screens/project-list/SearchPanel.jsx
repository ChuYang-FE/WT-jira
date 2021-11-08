import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function SearchPanel({users, param, setParam}) {
  const search = (type, value) => {
    setParam({
      ...param,
      [type]: value
    });
  };

  return (
    <form>
      <input
        type="text"
        value={param.name}
        onChange={e => search('name', e.target.value)}
      />
      <select 
        value={param.personId}
        onChange={e => search('personId', e.target.value)}
      >
        {
          users.map(user => (
            <option value={user.id} key={user.id}>{user.name}</option>
          ))
        }
      </select>
    </form>
  );
}

SearchPanel.propTypes = {
  users: PropTypes.array,
  param: PropTypes.object,
  setParam: PropTypes.func,
};
