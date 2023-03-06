// spot.js
import client from './client';

// バックエンドに登録されているSpotモデルの一覧を取得する
export const getSpotList = () => {
  return client.get('/spots');
};
