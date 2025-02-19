import { TypeAnimation } from "react-type-animation";
import { OrderNowButton } from "./components/OrderNowButton";

export const Section1 = () => {
    return (
        <section className="bg-[url('Background.png')] bg-cover bg-center h-[640px]">
            <div className="flex mx-40 gap-8 pt-[120px] justify-between"> 
                <div className="flex flex-col" style={{ width: 'calc(5.5 * (64px + 32px) - 32px)' }}>
                    <TypeAnimation
                        sequence={[
                            'Kopi Berkualitas, Kenikmatan Tanpa Batas',
                            800,
                            'Tempatnya Kopi dan Inspirasi Bersatu',
                            800,
                            'Hidup Terasa Lebih Baik dengan Secangkir Kopi Kami',
                            800,
                            'Kopi Kami, Cerita Anda',
                            800
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '18px', display: 'inline-block', fontFamily: 'Lato', color: '#222222', fontWeight: 'bold' }}
                        repeat={Infinity}
                    />
                    <div className="flex flex-col gap-16">
                        <div className="flex flex-col gap-4">
                            <div className="font-display text-5xl text-brown1">
                                Rasakan Kenikmatan Kopi Autentik di Setiap Tegukan!
                            </div>
                            <p className="text-myBlack text-justify">
                                Mulai hari Anda dengan secangkir kopi spesial yang dibuat dengan cinta dan dedikasi. Dari biji pilihan hingga cangkir Anda, kami menghadirkan pengalaman ngopi yang tak terlupakan. Temukan rasa yang memikat dan aroma yang membangkitkan semangat. Yuk, jelajahi menu kami dan temukan favoritmu!
                            </p>
                        </div>
                        <div className="flex gap-8">
                            <OrderNowButton />
                            <button className="font-bold text-brown1 px-8 py-3 rounded-full border border-brown1 w-40">
                                Visit
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative h-80" style={{ width: 'calc(6 * (64px + 32px) - 32px)' }}>
                    <img src="coffee1.jpg" alt="Coffee1"  className="outline outline-4 outline-brown4 rounded-t-[64px] drop-shadow-lg w-full object-cover h-80" />
                    <div className="flex gap-6 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 justify-center">
                        <img src="coffee2.jpg" alt="Coffee2" className="size-32 aspect-square object-cover rounded-xl outline outline-2 outline-brown4" />
                        <img src="coffee3.jpg" alt="Coffee3" className="size-32 aspect-square object-cover object-right rounded-xl outline outline-2 outline-brown4" />
                        <img src="coffee4.jpg" alt="Coffee4" className="size-32 aspect-square object-cover rounded-xl outline outline-2 outline-brown4" />
                    </div>
                </div>
            </div>
        </section>
    );
}