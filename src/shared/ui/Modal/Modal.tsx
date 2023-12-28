import React, { useCallback, useEffect, useRef, useState } from 'react';
import style from './Modal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';

interface ModalProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_TIME = 300;

export const Modal: React.FC<ModalProps> = ({ className, children, isOpen, onClose, lazy }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [mounted, setMounted] = useState(false);

    const timeRef = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        if (isOpen) {
            setMounted(true);
        }
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
                setMounted(false);
            }, ANIMATION_TIME);
        }
    }, [onClose]);

    const onKeyDownHandler = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const onContentHandler = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDownHandler);
        }

        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDownHandler);
        };
    }, [isOpen, onKeyDownHandler]);

    const mods: Record<string, boolean> = {
        [style.opened]: isOpen,
        [style.isClosing]: isClosing
    };

    if (lazy && !mounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(style.modal, mods, [className])}>
                <div className={style.overlay} onClick={closeHandler}>
                    <div className={style.content} onClick={onContentHandler}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
