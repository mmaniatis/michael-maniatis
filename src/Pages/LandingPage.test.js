import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';

test('Router and navbar rendered correctly.', () => {
    render(<LandingPage />);
});
