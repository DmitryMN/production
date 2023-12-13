import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
    test('render button', () => {
        render(<Button>Ok</Button>);
        expect(screen.getByText('Ok')).toBeInTheDocument();
    });
    test('button theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>clear</Button>);
        expect(screen.getByText('clear')).toHaveClass('clear');
        screen.debug();
    });
});
