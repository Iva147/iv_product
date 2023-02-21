import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';

export const AppRouter = () => {
  const { t } = useTranslation()
  return (
    <Suspense fallback={<div>{t('loading')}</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }, order) => (
          <Route
            key={order}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  )
}