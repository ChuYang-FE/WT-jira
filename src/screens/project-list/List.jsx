import React from 'react';
import PropTypes from 'prop-types';


export default function List({ users, list }) {
  return (
    <div className='x' style={{ border: '1px solid black' }}>
      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>负责人</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {
              list.map(project => (
                <tr key={project.personId}>
                  <td>{project.name}</td>
                  <td>{users.find(user => user.id === project.personId)?.name || '未知'}</td>
                </tr>
              ))
            }
          </tr>
        </tbody>
      </table>
    </div>
  );
}

List.propTypes = {
  users: PropTypes.array,
  list: PropTypes.array,
};
