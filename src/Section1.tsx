import { TypeAnimation } from "react-type-animation";
import { OrderNowButton } from "./components/OrderNowButton";

export const Section1 = () => {
    return (
        <section className="bg-[url('Background.png')] bg-cover bg-center lg:h-[640px]">
            <div className="flex lg:flex-row flex-col lg:mx-40 md:mx-16 sm:mx-8 mx-4 lg:gap-8 gap-16 md:pt-[120px] py-16 xl:justify-between justify-center items-center lg:items-start"> 
                <div className="flex flex-col lg:w-[calc(5.5*(64px+32px)-32px)]">
                    <TypeAnimation
                        sequence={[
                            'Kopi Berkualitas, Kenikmatan Tanpa Batas',
                            800,
                            'Kopi Terbaik, Teman Setia Hari Anda',
                            800,
                            'Kopi Segar, Energi Tiada Henti',
                            800,
                            'Kopi Kami, Cerita Anda',
                            800,
                            'Kopi Hangat, Cerita yang Dekat',
                            800,
                            'Kopi Asli, Dari Hati ke Cangkir',
                            800,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '18px', display: 'inline-block', fontFamily: 'Lato', color: '#222222', fontWeight: 'bold' }}
                        repeat={Infinity}
                    />
                    <div className="flex flex-col lg:gap-16 gap-8">
                        <div className="flex flex-col lg:gap-4 gap-2">
                            <div className="font-display md:text-5xl text-4xl text-brown1">
                                Rasakan Kenikmatan Kopi Autentik di Setiap Tegukan!
                            </div>
                            <p className="text-myBlack text-justify leading-tight">
                                Mulai hari Anda dengan secangkir kopi spesial yang dibuat dengan cinta dan dedikasi. Dari biji pilihan hingga cangkir Anda, kami menghadirkan pengalaman ngopi yang tak terlupakan. Temukan rasa yang memikat dan aroma yang membangkitkan semangat. Yuk, jelajahi menu kami dan temukan favoritmu!
                            </p>
                        </div>
                        <div className="flex gap-8 lg:justify-start justify-center">
                            <OrderNowButton />
                            <button className="font-bold text-brown1 px-8 py-3 rounded-full border border-brown1 w-40">
                                Visit
                            </button>
                        </div>
                    </div>
                </div>
                <img src="HeroImage.svg" alt="HeroImage" className="lg:w-[calc(6*(64px+32px)-32px)] object-contain drop-shadow-lg" />
            </div>
            <div className="flex">

            </div>
        </section>
    );
}