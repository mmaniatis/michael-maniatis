import { render, screen } from '@testing-library/react';
import Contact from './Contact'

test('Router and navbar rendered correctly.', () => {
    render(<Contact />);
});


test('renders the forum', () => {
    const container = render(<Contact />);

    console.log(container.firstChild);
});
