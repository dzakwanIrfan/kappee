import { OrderNowButton } from "./OrderNowButton"

export const Navbar = () => {
    return (
        <header className="bg-white px-40 py-4">
            <nav className="flex justify-between items-center">
                <div className="font-display text-brown1 text-4xl">Kappee</div>
                <ul className="flex space-x-8 text-brown1">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Location</a></li>
                </ul>
                <OrderNowButton />
            </nav>
        </header>
    )
}