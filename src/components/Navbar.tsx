import { useState } from "react";
import { OrderNowButton } from "./OrderNowButton";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white lg:px-40 md:px-16 sm:px-8 px-4 py-4 shadow-sm">
            <nav className="flex justify-between items-center">
                <div className="font-display text-brown1 text-4xl">Kappee</div>

                <ul className="md:flex hidden space-x-8 text-brown1 font-medium">
                    <li><a href="#" className="hover:text-brown2 transition-colors">About us</a></li>
                    <li><a href="#" className="hover:text-brown2 transition-colors">Menu</a></li>
                    <li><a href="#" className="hover:text-brown2 transition-colors">Location</a></li>
                </ul>

                <div className="md:block hidden">
                    <OrderNowButton />
                </div>

                <button
                    onClick={toggleMenu}
                    className="md:hidden text-brown1 focus:outline-none"
                >
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                        />
                    </svg>
                </button>
            </nav>

            {isMenuOpen && (
                <div className="md:hidden mt-4">
                    <ul className="flex flex-col space-y-4 text-brown1 font-medium">
                        <li><a href="#" className="hover:text-brown2 transition-colors">About us</a></li>
                        <li><a href="#" className="hover:text-brown2 transition-colors">Menu</a></li>
                        <li><a href="#" className="hover:text-brown2 transition-colors">Location</a></li>
                    </ul>
                    <div className="mt-4">
                        <OrderNowButton />
                    </div>
                </div>
            )}
        </header>
    );
};