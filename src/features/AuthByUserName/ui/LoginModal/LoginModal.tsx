import React, { Suspense } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';
import { Loader } from 'shared/ui/Loader/Loader';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    modalClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ className, isOpen, modalClose }) => {
    return (
        <Modal lazy isOpen={isOpen} onClose={() => { modalClose(); }}>
            <Suspense fallback={<Loader />}>
                <LoginFormLazy />
            </Suspense>
        </Modal>
    );
};
