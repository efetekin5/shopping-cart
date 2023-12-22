import { render, screen, waitFor } from "@testing-library/react"
import Header from '../src/components/Header'
import { userEvent } from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import MainForShopPage from "../src/components/MainForShopPage"
import { http, HttpResponse } from "msw"
import { setupServer } from 'msw/node'

describe('Header component', () => {
    it('render header in shop page', async () => {
        const user = userEvent.setup();

        render(<BrowserRouter><Header /></BrowserRouter>);
        const navItem = screen.getByRole('link', { name: 'Shop'})

        await user.click(navItem);

        expect(screen.getByTestId('header')).toBeInTheDocument();
    });

    it('render main in shop page', async () => {

        render(<MainForShopPage />);
        expect(await screen.getByTestId('mainForShopPage')).toBeInTheDocument();
    })
})