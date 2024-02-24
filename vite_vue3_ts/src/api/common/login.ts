import request from '@/utils/request';

export const login = (username: string, password: string) => {
  return request.post('/api/login', {
    username,
    password,
  });
};
