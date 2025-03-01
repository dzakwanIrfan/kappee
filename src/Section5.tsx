import { useInView } from "react-intersection-observer";
import { OrderNowButton } from "./components/OrderNowButton";

export const Section5 = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
        <section className={`lg:mx-40 md:mx-16 sm:mx-8 mx-4 pt-16 pb-20 bg-white transition-all duration-1000 ease-[cubic-bezier(0.95,0.05,0.795,0.035)] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} ref={ref}>
            <div className="flex lg:flex-row flex-col">
                <div className="flex flex-col gap-16 bg-brown1 p-16 lg:rounded-s-[64px] lg:rounded-e-none rounded-t-[64px] lg:w-1/2">
                    <div className="flex flex-col gap-2">
                        <div className="text-brown4 font-display md:text-6xl text-5xl">Your Perfect Coffee Awaits</div>
                        <p className="text-white text-justify md:text-base text-sm">Temukan kehangatan dalam setiap tegukan dan ciptakan momen berharga bersama kami. Hadirkan cerita baru dengan secangkir kopi yang sempurna. Kami tunggu kedatangan Anda!</p>
                    </div>
                    <OrderNowButton />
                </div>
                <img src="/last.jpg" alt="Last" className="lg:rounded-e-[64px] lg:rounded-s-none rounded-b-[64px] lg:w-1/2 object-cover" />
            </div>
        </section>
    );
}