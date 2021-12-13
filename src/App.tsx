import { AuthApp } from 'authApp';
import { useAuth } from 'context/AuthContext';
import { UnAuthApp } from 'unAuthApp';

function App() {
  const { user } = useAuth();
  return <div className="App">{user ? <AuthApp /> : <UnAuthApp />}</div>;
}

export default App;
