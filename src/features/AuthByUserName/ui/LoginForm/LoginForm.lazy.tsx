import React from 'react';
import { LoginFormProps } from 'features/AuthByUserName/ui/LoginForm/LoginForm';

export const LoginFormLazy = React.lazy<React.FC<LoginFormProps>>(() => import('./LoginForm'));
