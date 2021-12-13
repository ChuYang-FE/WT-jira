import { ProjectListScreen } from 'screens/project-list';
import { useAuth } from 'context/AuthContext';

export const AuthApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <ProjectListScreen />
      <button onClick={logout}>登出</button>
    </div>
  );
};
