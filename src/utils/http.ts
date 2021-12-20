import qs from 'qs';

import * as auth from 'authProvider';
import { useAuth } from 'context/AuthContext';

const apiUrl = process.env.REACT_APP_API_URL;

interface SearchObj {
  name?: '';
  personId?: '';
}
interface CustomConfig extends RequestInit {
  data?: SearchObj;
  token?: string;
}

export const http = (
  endpoint: string,
  { data, token, headers, ...customConfig }: CustomConfig = {},
) => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : '',
    },
    ...customConfig,
  };

  if (config.method.toUpperCase() === 'GET') {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }

  return window
    .fetch(`${apiUrl}/${endpoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        await auth.logout();
        window.location.reload();
        return Promise.reject({ message: '请重新登录' });
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
};

export const useHttp = () => {
  const { user } = useAuth();
  return (...[endPoint, config]: Parameters<typeof http>) =>
    http(endPoint, { ...config, token: user?.token });
};
