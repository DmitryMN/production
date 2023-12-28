import React from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    modalClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ className, isOpen, modalClose }) => {
    return (
        <Modal lazy isOpen={isOpen} onClose={() => { modalClose(); }}>
            <LoginForm />
        </Modal>
    );
};
