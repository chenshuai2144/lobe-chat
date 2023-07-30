import { ActionIcon, Icon } from '@lobehub/ui';
import { Dropdown, MenuProps } from 'antd';
import {
  Feather,
  FileClock,
  FolderInput,
  FolderOutput,
  Github,
  Heart,
  Settings,
} from 'lucide-react';
import Router from 'next/router';
import { ReactNode, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import pkg from '../../../package.json';

const BottomAction = memo<{ children: ReactNode }>(({ children }) => {
  const { t } = useTranslation('common');

  const items: MenuProps['items'] = useMemo(
    () => [
      {
        icon: <Icon icon={FolderInput} />,
        key: 'import',
        label: <div>{t('import')}</div>,
      },
      {
        children: [
          {
            key: 'allAgent',
            label: <div>{t('exportType.allAgent')}</div>,
          },
          {
            key: 'allAgentWithMessage',
            label: <div>{t('exportType.allAgentWithMessage')}</div>,
          },
          {
            key: 'globalSetting',
            label: <div>{t('exportType.globalSetting')}</div>,
          },
          {
            type: 'divider',
          },
          {
            key: 'all',
            label: <div>{t('exportType.all')}</div>,
          },
        ],
        icon: <Icon icon={FolderOutput} />,
        key: 'export',
        label: t('export'),
      },
      {
        type: 'divider',
      },
      {
        icon: <Icon icon={Feather} />,
        key: 'feedback',
        label: t('feedback'),
        onClick: () => window.open(pkg.bugs.url, '__blank'),
      },
      {
        icon: <Icon icon={FileClock} />,
        key: 'changelog',
        label: t('changelog'),
        onClick: () => window.open(`${pkg.homepage}/blob/master/CHANGELOG.md`, '__blank'),
      },
      {
        icon: <Icon icon={Heart} />,
        key: 'about',
        label: t('about'),
        onClick: () => window.open(pkg.homepage, '__blank'),
      },
      {
        type: 'divider',
      },
      {
        icon: <Icon icon={Settings} />,
        key: 'setting',
        label: t('setting'),
        onClick: () => Router.push('/setting'),
      },
    ],
    [],
  );

  return (
    <>
      <ActionIcon icon={Github} onClick={() => window.open(pkg.homepage, '__blank')} />
      <Dropdown arrow={false} menu={{ items }} trigger={['click']}>
        {children}
      </Dropdown>
    </>
  );
});

export default BottomAction;
