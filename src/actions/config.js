import {
  Kindred,
  REGIONS,
  LIMITS,
  InMemoryCache,
} from 'kindred-api';

export const Api = new Kindred({
  key: 'RGAPI-73be25fa-d728-4e84-99fd-b5b8cf9535cf',
  defaultRegion: REGIONS.BRAZIL,
  limits: LIMITS.DEV, // [[20, 1], [100, 120]] 20 reqs/1s. 100 reqs/2m.
  debug: true,
  showHeaders: true,
  timeout: 10000, // 10 seconds
  cache: new InMemoryCache()
})
