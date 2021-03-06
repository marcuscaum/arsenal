import { Api } from '../config';

const getAll = () => (
  Api.Static.Champion
    .list({ tags: 'all' })
    .then(data => data)
)

export const Champions = {
  getAll,
}
