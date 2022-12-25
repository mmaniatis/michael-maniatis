import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { BrowserRouter as Router} from "react-router-dom";

test('Router and navbar rendered correctly.', () => {
    <Router>
        render(<Navbar />);
    </Router>
});


// test('renders the navbar', () => {
//     const container = render(<Router><Navbar /></Router>);

//     console.log(container)
// });
