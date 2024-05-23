import { ArticleBlockCode } from '../../model/types/article';
import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import style from './ArticleCodeBlock.module.scss';
import { Code } from 'shared/ui/Code/Code';

interface ArticleCodeBlockProps {
    className?: string;
    block: ArticleBlockCode
}

export const ArticleCodeBlock: React.FC<ArticleCodeBlockProps> = memo(({ className, block }) => {
    return (
        <div className={classNames(style.codeBlock, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});
