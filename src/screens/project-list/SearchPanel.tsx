import { Input, Select } from 'antd';
import PropTypes from 'prop-types';

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
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
      <Input
        type="text"
        value={param.name}
        onChange={(e) => search('name', e.target.value)}
      />
      <Select
        placeholder="负责人"
        value={param.personId}
        onChange={(value) => search('personId', value)}
      >
        <Select.Option value="">负责人</Select.Option>
        {users.map((user) => (
          <Select.Option value={user.id} key={user.id}>
            {user.name}
          </Select.Option>
        ))}
      </Select>
    </form>
  );
};

SearchPanel.propTypes = {
  users: PropTypes.array,
  param: PropTypes.object,
  setParam: PropTypes.func,
};
