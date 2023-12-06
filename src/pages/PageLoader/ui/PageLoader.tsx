import React from 'react';
import { classNames } from 'shared/lib/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import style from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string
}

export const PageLoader: React.FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames(style.pageLoader, {}, [])}>
      <Loader />
    </div>
  )
}
