import { Button, Form, Input } from 'antd';
import { useAuth } from 'context/AuthContext';

export const Register: React.FC = () => {
  const { register, user } = useAuth();

  const handleSubmit = (values: { username: string; password: string }) => {
    register(values);
  };

  return (
    <Form onFinish={handleSubmit}>
      {user ? (
        <Form.Item>
          登陆成功！
          <br />
          用户名：{user?.name}
          <br />
          token：{user?.token}
        </Form.Item>
      ) : (
        ''
      )}
      <Form.Item>
        <Input placeholder="用户名" type="text" id="username" />
      </Form.Item>
      <Form.Item>
        <Input placeholder="密码" type="password" id="password" />
      </Form.Item>
      <Button htmlType="submit" type="primary">
        注册
      </Button>
    </Form>
  );
};
