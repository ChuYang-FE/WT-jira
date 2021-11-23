import React from 'react';
import PropTypes from 'prop-types';

import { User } from './SearchPanel';

interface Project {
  id: string;
  name: string;
  personId: string;
  organization: string;
  created: number;
}

interface ListProps {
  list: Project[];
  users: User[];
}

export const List = ({ users, list }: ListProps) => {
  return (
    <div className="x" style={{ border: '1px solid black' }}>
      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>负责人</th>
          </tr>
        </thead>
        <tbody>
          {list.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>
                {users.find((user) => user.id === project.personId)?.name ||
                  '未知'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

List.propTypes = {
  users: PropTypes.array,
  list: PropTypes.array,
};
