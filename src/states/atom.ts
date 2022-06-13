import store from 'storejs';
import { atom } from 'recoil';

export const themeState = atom<string>({
  key: '#themeState',
  default: store.get('theme') || 'LIGHT',
});

export const detailState = atom<string>({
  key: '#detailState',
  default: '',
});
