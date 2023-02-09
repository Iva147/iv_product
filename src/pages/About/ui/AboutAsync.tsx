import {lazy} from 'react';

export const AboutAsync = lazy(() => new Promise(resolve => {
  setTimeout(() => import('./About'), 2000)

}));