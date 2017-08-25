import { Api } from '../config';

const getAll = () => (
  Api.Champion
    .list()
    .then(data => data)
    .catch(error => console.log(error))
);

export const Champions = {
  getAll,
}
