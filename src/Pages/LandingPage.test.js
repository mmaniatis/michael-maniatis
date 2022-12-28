import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';
import { BrowserRouter as Router} from "react-router-dom";

test('Router and navbar rendered correctly.', () => {
    <Router>
        render(<LandingPage />);
    </Router>
});
