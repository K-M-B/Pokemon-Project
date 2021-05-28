import { render } from "@testing-library/react";
import Home from './Home';
describe('Home', () => {
    it('renders successfully', () => {
        const container = render(<Home />);
        const h1 = container.getByText('Welcome to this Pokemon Thing');
    })
})