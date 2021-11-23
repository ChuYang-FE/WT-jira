import React from 'react';
import PropTypes from 'prop-types';

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
}
interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps['param']) => void;
}

export const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
  const search = (type: string, value: string | number) => {
    setParam({
      ...param,
      [type]: value,
    });
  };

  return (
    <form>
      <input
        type="text"
        value={param.name}
        onChange={(e) => search('name', e.target.value)}
      />
      <select
        value={param.personId}
        onChange={(e) => search('personId', e.target.value)}
      >
        <option value="">负责人</option>
        {users.map((user) => (
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  );
};

SearchPanel.propTypes = {
  users: PropTypes.array,
  param: PropTypes.object,
  setParam: PropTypes.func,
};
