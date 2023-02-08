import {lazy} from 'react';

const AboutAsync = lazy(() => new Promise(resolve => {
  setTimeout(() => import('./About'), 2000)

}));

export default AboutAsync