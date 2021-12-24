import { Table } from 'antd';
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
  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: Project, b: Project) => a.name.localeCompare(b.name),
    },
    {
      title: '负责人',
      render: (value: ListProps, project: Project) => (
        <span>
          {users.find((user: User) => user.id === project.personId)?.name ||
            '未知'}
        </span>
      ),
    },
  ];

  return (
    <div className="x">
      <Table columns={columns} dataSource={list} pagination={false} />
    </div>
  );
};

List.propTypes = {
  users: PropTypes.array,
  list: PropTypes.array,
};
