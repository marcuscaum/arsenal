import { Api } from '../config';
import { print } from 'kindred-api';

const getAll = () => (
  Api.Static.Champion
    .list({ tags: 'all' })
    .then(data => data)
)

export const Champions = {
  getAll,
}
