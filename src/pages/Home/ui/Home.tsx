import { useTranslation } from 'react-i18next';
import type { FC } from 'react';

const Home: FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      {t('Home')}
    </div>
  )
}

export default Home