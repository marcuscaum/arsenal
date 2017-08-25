import { Api } from '../config';
import { print } from 'kindred-api';

const getAll = () => Api.Static.Champion.list({ tags: 'all' }, print);

export const Champions = {
  getAll,
}
