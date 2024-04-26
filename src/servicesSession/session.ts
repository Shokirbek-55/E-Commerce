import { config } from 'config';
import store from 'store2';

export const session = {
  add: (token: string) => store.set(config.accessToken, token),
  remove: () => store.remove(config.accessToken),
  get: () => store.get(config.accessToken)
};
