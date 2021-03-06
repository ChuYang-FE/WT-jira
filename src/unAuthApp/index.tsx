import { Button, Card, Divider } from 'antd';
import { useState } from 'react';
import styled from '@emotion/styled';

import { Login } from './login';
import { Register } from './register';
import logo from '../assets/logo.svg';
import left from '../assets/left.svg';
import right from '../assets/right.svg';

export const UnAuthApp: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  return (
    <Background>
      <Container>
        <Header />
        <ShadowCard>
          <Title>{isRegistered ? '请登录' : '请注册'}</Title>
          {isRegistered ? <Login /> : <Register />}
          <Divider />
          <a onClick={() => setIsRegistered(!isRegistered)}>
            {isRegistered ? '没有账号？注册新账号' : '已经有账号了？直接登录'}
          </a>
        </ShadowCard>
      </Container>
    </Background>
  );
};

export const LongBtn = styled(Button)`
  width: 100%;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem),
    calc(((100vw - 40rem) / 2) - 3.2rem), cover;
  background-image: url(${right}), url(${left});
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 48rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgba(94, 108, 132);
`;

const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;
