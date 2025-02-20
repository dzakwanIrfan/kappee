import { AboutCard } from "./components/AboutCard";
import { Icon } from "@iconify/react";
import { CoffeeCard } from "./components/CoffeeCard";

export const Section2 = () => {
    return (
        <div className="relative w-full h-full overflow-hidden">
            <img
                src="top-coffee.png"
                alt="Top Coffee"
                className="absolute sm:-top-[7%] -top-52 sm:translate-x-1/3 translate-x-1/2 right-0 -rotate-45 object-cover sm:size-96 size-96"
            />
            <div className="font-display text-brown2 opacity-20 text-[256px] absolute right-0 lg:block hidden">Kappee</div>
            <div className="bg-white lg:mx-40 md:mx-16 sm:mx-8 mx-4 py-16">
                <img
                    src="about.jpg"
                    alt="Tentang Kami Kappee"
                    className="object-cover xl:w-6/12 w-full outline outline-4 outline-brown4 drop-shadow-lg shadow-md shadow-black rounded-3xl h-64"
                />
                <div className="flex sm:flex-row flex-col justify-between sm:gap-8 gap-4 items-start sm:mt-12 mt-8">
                    <div 
                        className="font-display text-brown1 sm:text-5xl text-4xl sm:w-6/12 w-auto"
                    >
                        Tentang Kappee: Lebih dari Sekadar Kopi
                    </div>
                    <div 
                        className="text-myBlack sm:w-6/12 w-auto text-justify sm:text-base text-sm"
                    >
                        Di Kappee, kami percaya bahwa kopi adalah sumber inspirasi. Itulah mengapa kami tidak hanya menyajikan kopi berkualitas, tapi juga menciptakan suasana yang mendukung kreativitas dan relaksasi. Datanglah ke Kappee, nikmati kopi kami, dan biarkan inspirasi mengalir dalam setiap tegukan.
                    </div>
                </div>
                <div className="flex md:flex-row flex-col lg:gap-8 gap-4 justify-between sm:mt-12 mt-8">
                    <AboutCard 
                        icon={<Icon icon="bxs:coffee-bean" />} 
                        title="Quality Beans" 
                        text="Finest beans, globally sourced, perfectly roasted for rich flavor."  
                    />
                    <AboutCard 
                        icon={<Icon icon="fluent:couch-48-filled" />} 
                        title="Cozy Ambiance" 
                        text="Warm, inviting space to relax, work, or connect."  
                    />
                    <AboutCard 
                        icon={<Icon icon="mdi:heart" />} 
                        title="Crafted with Passion" 
                        text="Every cup made with love and precision by skilled baristas."  
                    />
                </div>
            </div>
            <section className="relative flex flex-col justify-center lg:mx-40 md:mx-16 sm:mx-8 mx-4 pb-16 bg-white">
                <img src="/Oval.png" alt="Oval" className="absolute -top-16 lg:-left-1/3 md:-left-[40%] -left-1/2" />
                <img src="/Oval.png" alt="Oval" className="absolute bottom-1/4 lg:-right-1/3 md:-right-[40%] -right-1/2 rotate-90" />
                <h1 className="font-display text-5xl text-brown1 mx-auto mb-[60px]">Our Signature Menu</h1>
                <div className="flex flex-col gap-8">
                    <div className="flex md:flex-row flex-col gap-8 justify-center items-center w-full">
                        <CoffeeCard image="/macchiato.png" title="Macchiato" price="Rp20.000" />
                        <CoffeeCard image="/americano.png" title="Hot Americano" price="Rp18.000" default={true} />
                    </div>
                    <div className="flex md:flex-row flex-col gap-8 justify-center items-center w-full">
                        <CoffeeCard image="/croissant.png" title="Croissant" price="Rp15.000" />
                        <CoffeeCard image="/tiramisu.png" title="Chocolate Tiramisu" price="Rp20.000" />
                    </div>
                </div>
                <button className="transform transition-transform duration-300 hover:-translate-y-2 w-fit mx-auto font-bold text-brown1 px-8 py-3 rounded-full border border-brown1 md:text-base text-sm mt-16">
                    View the full menu
                </button>
            </section>
        </div>
    );
}