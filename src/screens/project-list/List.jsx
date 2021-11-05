import React from 'react';

export default function List() {
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
            <td>A</td>
            <td>B</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
