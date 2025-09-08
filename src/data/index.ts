import { udotiData } from './site1-udoti';
import { drAnkitData } from './site2-dr-ankit';
import { drAnishData } from './site3-dr-anish';
import { drYuvarajData } from './site4-dr-yuvaraj';
import { drAnuragData } from './site5-dr-anurag';

// IMPORTANT: The keys here (e.g., 'udoti') MUST match the slug in the data file
export const allSitesData = {
  'udoti': udotiData,
  'dr-ankit': drAnkitData,
  'dr-anish': drAnishData,
  'dr-yuvaraj': drYuvarajData,
  'dr-anurag': drAnuragData,
};

export type SiteSlug = keyof typeof allSitesData;