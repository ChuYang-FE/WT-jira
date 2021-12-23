import { AuthApp } from 'authApp';
import { useAuth } from 'context/AuthContext';
import { UnAuthApp } from 'unAuthApp';

import './App.less';

function App(): JSX.Element {
  const { user } = useAuth();
  return <div className="App">{user ? <AuthApp /> : <UnAuthApp />}</div>;
}

export default App;
