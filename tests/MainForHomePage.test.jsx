import { render, screen } from "@testing-library/react";
import { UserEvent, userEvent } from "@testing-library/user-event";
import MainForHomePage from "../src/components/MainForHomePage";
import { BrowserRouter } from "react-router-dom";

describe('Main For Home Page Component', () => {
    it('render header inside item component', async () => {
        const user = userEvent.setup();

        render(<BrowserRouter><MainForHomePage /></BrowserRouter>);
        const featuredItem = screen.getByTestId('featuredItem0');

        await user.click(featuredItem);
        expect(screen.getByTestId('header')).toBeInTheDocument();
    })
})