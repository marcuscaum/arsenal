import {
  Kindred,
  REGIONS,
  LIMITS,
  InMemoryCache,
} from 'kindred-api';

export const Api = new Kindred({
  key: 'RGAPI-ba92ccf3-13aa-42fc-b856-4aa531d81fa3',
  defaultRegion: REGIONS.NORTH_AMERICA,
  limits: LIMITS.DEV, // [[20, 1], [100, 120]] 20 reqs/1s. 100 reqs/2m.
  debug: true,
  showHeaders: false,
  timeout: 10000, // 10 seconds
  cache: new InMemoryCache()
})
