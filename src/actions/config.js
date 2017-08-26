import {
  Kindred,
  REGIONS,
  LIMITS,
  InMemoryCache,
} from 'kindred-api';

export const Api = new Kindred({
  key: 'RGAPI-e0762952-bfc4-4b51-8938-596d62c409bf',
  defaultRegion: REGIONS.EUROPE,
  limits: LIMITS.DEV, // [[20, 1], [100, 120]] 20 reqs/1s. 100 reqs/2m.
  debug: true,
  showHeaders: true,
  timeout: 10000, // 10 seconds
  cache: new InMemoryCache()
})
