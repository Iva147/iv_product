import {Route, Routes} from 'react-router-dom';
import React, {Suspense} from 'react';
import {routeConfig} from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({path, element}) => (
          <Route path={path} element={<div className="page-wrapper">{element}</div>}/>
        ))}
      </Routes>
    </Suspense>
  )
}