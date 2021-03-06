import { Form, Input } from 'antd';
import { LongBtn } from 'unAuthApp';
import { useAuth } from 'context/AuthContext';

export const Login: React.FC = () => {
  const { login, user } = useAuth();

  const handleSubmit = (values: { username: string; password: string }) => {
    login(values);
  };

  return (
    <Form onFinish={handleSubmit}>
      {user ? (
        <div>
          登陆成功！
          <br />
          用户名：{user?.name}
          <br />
          token：{user?.token}
        </div>
      ) : (
        ''
      )}
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input placeholder="用户名" type="text" id="username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input placeholder="密码" type="password" id="password" />
      </Form.Item>
      <Form.Item>
        <LongBtn htmlType="submit" type="primary">
          登录
        </LongBtn>
      </Form.Item>
    </Form>
  );
};
