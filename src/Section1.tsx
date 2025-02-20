import { TypeAnimation } from "react-type-animation";
import { OrderNowButton } from "./components/OrderNowButton";

export const Section1 = () => {
    return (
        <section className="bg-[url('Background.png')] bg-cover bg-center">
            <div className="flex lg:flex-row flex-col lg:mx-40 md:mx-16 sm:mx-8 mx-4 lg:gap-8 gap-16 lg:pt-[120px] md:pt-24 py-16 xl:justify-between justify-center items-center lg:items-start"> 
                <div className="flex flex-col lg:w-[calc(5.5*(64px+32px)-32px)]">
                    <TypeAnimation
                        sequence={[
                            'Kopi Berkualitas, Kenikmatan Tanpa Batas',
                            1200,
                            'Kopi Terbaik, Teman Setia Hari Anda',
                            1200,
                            'Kopi Segar, Energi Tiada Henti',
                            1200,
                            'Kopi Kami, Cerita Anda',
                            1200,
                            'Kopi Hangat, Cerita yang Dekat',
                            1200,
                            'Kopi Asli, Dari Hati ke Cangkir',
                            1200,
                        ]}
                        wrapper="span"
                        speed={25}
                        style={{ fontSize: '18px', display: 'inline-block', fontFamily: 'Lato', color: '#222222', fontWeight: 'bold' }}
                        repeat={Infinity}
                    />
                    <div className="flex flex-col lg:gap-16 gap-8">
                        <div className="flex flex-col lg:gap-4 gap-2">
                            <div className="font-display md:text-5xl text-4xl text-brown1">
                                Rasakan Kenikmatan Kopi Autentik di Setiap Tegukan!
                            </div>
                            <p className="text-myBlack text-justify leading-tight md:text-base text-sm">
                                Mulai hari Anda dengan secangkir kopi spesial yang dibuat dengan cinta dan dedikasi. Dari biji pilihan hingga cangkir Anda, kami menghadirkan pengalaman ngopi yang tak terlupakan. Temukan rasa yang memikat dan aroma yang membangkitkan semangat. Yuk, jelajahi menu kami dan temukan favoritmu!
                            </p>
                        </div>
                        <div className="flex gap-8 lg:justify-start justify-center">
                            <OrderNowButton />
                            <button className="font-bold text-brown1 px-8 py-3 rounded-full border border-brown1 w-40 md:text-base text-sm">
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