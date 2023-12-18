import React from 'react';
import style from './Modal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface ModalProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = ({ className, children, isOpen, onClose }) => {
    const mods: Record<string, boolean> = {
        [style.opened]: isOpen
    };

    const closeHandler = () => {
        if (onClose) {
            onClose();
        }
    };

    const onContentHandler = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className={classNames(style.modal, mods, [className])}>
            <div className={style.overlay} onClick={closeHandler}>
                <div className={style.content} onClick={onContentHandler}>
                    {children}
                </div>
            </div>
        </div>
    );
};
