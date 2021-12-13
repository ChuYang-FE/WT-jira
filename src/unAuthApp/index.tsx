import { useState } from 'react';

import { Login } from './login';
import { Register } from './register';

export const UnAuthApp = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  return (
    <div>
      {isRegistered ? <Login /> : <Register />}
      <button onClick={() => setIsRegistered(!isRegistered)}>
        {isRegistered ? '切换到注册' : '切换到登录'}
      </button>
    </div>
  );
};
