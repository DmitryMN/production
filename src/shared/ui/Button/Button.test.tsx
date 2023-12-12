import { Button } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
    test('render button', () => {
        render(<Button>Ok</Button>);
        expect(screen.getByText('Ok')).toBeInTheDocument();
    });
});
