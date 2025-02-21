import { useInView } from "react-intersection-observer";
import { CoffeeCard } from "./components/CoffeeCard";

export const Menu = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Hanya trigger sekali
        threshold: 0.1,     // Trigger ketika 10% element terlihat
    });
    return (
        <section 
            id="menu"
            ref={ref} 
            className={`relative flex flex-col justify-center lg:mx-40 md:mx-16 sm:mx-8 mx-4 pb-16 bg-white transition-all duration-1000 ease-in-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            <img src="/Oval.png" alt="Oval" className="absolute -top-16 lg:-left-1/3 md:-left-[40%] -left-1/2" />
            <img src="/Oval.png" alt="Oval" className="absolute md:bottom-0 -bottom-16 md:-right-[10%] right-0 rotate-90" />
            <h1 className="font-display text-5xl text-brown1 mx-auto mb-[60px]">Our Signature Menu</h1>
            <div className="flex flex-col gap-8">
                <div 
                    className={`flex md:flex-row flex-col gap-8 justify-center items-center w-full transition-all duration-1000 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${inView ? 'delay-0' : 'delay-0'}`}>
                    <CoffeeCard image="/macchiato.png" title="Macchiato" price="Rp20.000" />
                    <CoffeeCard image="/americano.png" title="Hot Americano" price="Rp18.000" default={true} />
                </div>
                <div className={`flex md:flex-row flex-col gap-8 justify-center items-center w-full transition-all duration-1000 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${inView ? 'delay-200' : 'delay-0'}`}>
                    <CoffeeCard image="/croissant.png" title="Croissant" price="Rp15.000" />
                    <CoffeeCard image="/tiramisu.png" title="Chocolate Tiramisu" price="Rp20.000" />
                </div>
            </div>
            <a href="https://dzakwan-irfan.web.app/" className="text-center transform transition-transform duration-300 hover:-translate-y-2 w-fit mx-auto font-bold text-brown1 px-8 py-3 rounded-full border border-brown1 md:text-base text-sm mt-16">
                View the full menu
            </a>
        </section>
    );
}