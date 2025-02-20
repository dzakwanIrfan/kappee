import { Icon } from "@iconify/react/dist/iconify.js";

export const Footer = () => {
    return (
        <footer className="bg-white lg:px-40 md:px-16 sm:px-8 px-4 pt-4 shadow-sm">
            <nav className="flex flex-col md:flex-row justify-between items-center border-b border-brown1 pb-4">
                <div className="font-display text-brown1 text-4xl mb-4 md:mb-0">Kappee</div>
                <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 text-brown1 font-medium">
                    <li><a href="#" className="hover:text-brown2 transition-colors">About us</a></li>
                    <li><a href="#" className="hover:text-brown2 transition-colors">Menu</a></li>
                    <li><a href="#" className="hover:text-brown2 transition-colors">Location</a></li>
                </ul>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <div className="text-brown1">
                        <Icon icon="uil:facebook" width="24" height="24" />
                    </div>
                    <div className="text-brown1">
                        <Icon icon="uil:instagram" width="24" height="24" />
                    </div>
                    <div className="text-brown1">
                        <Icon icon="uil:voicemail-rectangle" width="24" height="24" />
                    </div>
                </div>
            </nav>
            <div className="text-center text-brown1 text-sm py-8">
                © 2025 Kappee All rights reserved.
            </div>
        </footer>
    );
}