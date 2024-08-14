import React, { memo, useEffect, UIEvent, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './page.module.scss';
import { useInView } from 'react-intersection-observer';
import { getScrollRestorationPath, scrollRestorationActions } from 'features/ScrollRestoration';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';

interface PageProps {
    className?: string;
    children: React.ReactNode;
    onScrollEnd?: () => void;
}

export const Page: React.FC<PageProps> = memo(({ className, children, onScrollEnd }) => {

    const dispatch = useAppDispatch();
    const pathName = useLocation();
    const refParent = useRef<HTMLDivElement>(null);
    const position = useSelector((state: StateSchema) => getScrollRestorationPath(state, pathName.pathname));

    useEffect(() => {
        refParent.current.scrollTop = position
    }, []);

    const { ref, inView } = useInView({
        threshold: 1.0
    });

    const onScrollHnadler = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollRestorationActions.setScrollPosition({ path: location.pathname, possition: e.currentTarget.scrollTop }));
    }, 500);

    useEffect(() => {
        if (inView && onScrollEnd) {
            onScrollEnd();
        }
    }, [inView]);

    return (
        <section ref={refParent} className={classNames(style.page, {}, [className])} onScroll={onScrollHnadler}>
            {children}
            <div ref={ref}></div>
        </section>
    );
});