import { ArticleDetails } from 'entities/Article';
import React from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: React.FC<ArticleDetailsPageProps> = ({ className }) => {

  const { id } = useParams();

  if(!id) {
    return (<div>Atricle not found</div>);
  }

  return (
    <div className={classNames('', {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default ArticleDetailsPage;

