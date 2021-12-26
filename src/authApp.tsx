import { Button } from 'antd';
import styled from '@emotion/styled';

import { ProjectListScreen } from 'screens/project-list';
import { useAuth } from 'context/AuthContext';

export const AuthApp: React.FC = () => {
  const { logout } = useAuth();
  return (
    <Container>
      <Header>
        <HeaderLeft>
          <h3>Logo</h3>
          <h3>项目</h3>
          <h3>用户</h3>
        </HeaderLeft>
        <HeaderRight>
          <Button onClick={logout}>登出</Button>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  height: 100px;
`;

const Header = styled.header`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const HeaderLeft = styled.div`
  display: flex;
`;

const HeaderRight = styled.div``;

const Main = styled.div`
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
