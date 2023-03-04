// post.js
import client from './client';

// 一覧
export const getList = () => {
  return client.get('/spots');
};
