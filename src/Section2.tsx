import { AboutCard } from "./components/AboutCard";
import { Icon } from "@iconify/react";

export const Section2 = () => {
    return (
        <div className="relative w-full h-full overflow-hidden">
            <img
                src="top-coffee.png"
                alt="Top Coffee"
                className="absolute sm:-top-[15%] -top-52 sm:translate-x-1/3 translate-x-1/2 right-0 -rotate-45 object-cover sm:size-96 size-96"
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
                        icon={<Icon icon="bxs:coffee-bean" className="text-brown1 text-5xl" />} 
                        title="Quality Beans" 
                        text="Finest beans, globally sourced, perfectly roasted for rich flavor."  
                    />
                    <AboutCard 
                        icon={<Icon icon="fluent:couch-48-filled" className="text-brown1 text-5xl" />} 
                        title="Cozy Ambiance" 
                        text="Warm, inviting space to relax, work, or connect."  
                    />
                    <AboutCard 
                        icon={<Icon icon="mdi:heart" className="text-brown1 text-5xl" />} 
                        title="Crafted with Passion" 
                        text="Every cup made with love and precision by skilled baristas."  
                    />
                </div>
            </div>
        </div>
    );
}