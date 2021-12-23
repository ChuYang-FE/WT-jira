import { Button, Card, Divider } from 'antd';
import { useState } from 'react';

import { Login } from './login';
import { Register } from './register';

export const UnAuthApp: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  return (
    <Card>
      {isRegistered ? <Login /> : <Register />}
      <Divider />
      <Button onClick={() => setIsRegistered(!isRegistered)}>
        {isRegistered ? '切换到注册' : '切换到登录'}
      </Button>
    </Card>
  );
};
