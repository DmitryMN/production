import React, { useState } from 'react';
import style from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className={classNames(style.navbar, {}, [className])}>
            <button onClick={() => { setOpen(true) }}>Login</button>
            <Modal isOpen={isOpen} onClose={() => { setOpen(false) }}><p>Hello</p></Modal>
        </nav>
    )
}
