import { ArticleBlockText } from '../../model/types/article';
import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Title } from 'shared/ui/Title/Title';
import style from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
    className?: string;
    block: ArticleBlockText;
}

export const ArticleTextBlock: React.FC<ArticleTextBlockProps> = memo(({ className, block }) => {
    return (
        <div className={classNames(style.textBlock, {}, [className])}>
            {block.title && <Title title={block.title} className={style.title}/>}
            {block.paragraphs.map((paragraph) => <Text key={paragraph} text={paragraph} />)}
        </div>
    );
});