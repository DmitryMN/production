import React, { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './page.module.scss';
import { useInView } from 'react-intersection-observer';

interface PageProps {
    className?: string;
    children: React.ReactNode;
    onScrollEnd?: () => void;
}

export const Page: React.FC<PageProps> = memo(({ className, children, onScrollEnd }) => {

    const { ref, inView } = useInView({
        threshold: 1.0
    });

    useEffect(() => {
        if (inView && onScrollEnd) {
            console.log("in View");
            onScrollEnd();
        }
        console.log("in Usefect");
    }, [inView]);

    return (
        <section className={classNames(style.page, {}, [className])}>
            {children}
            <div ref={ref}>current</div>
        </section>
    );
});