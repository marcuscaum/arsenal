import { Api } from '../config';

const getAll = () => (
  Api.Static.item
    .list({ tags: 'all' })
    .then(data => data)
)

export const Items = {
  getAll,
}
