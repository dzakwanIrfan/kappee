import { useInView } from 'react-intersection-observer';

export const Section3 = () => {
    // Gunakan useInView untuk mendeteksi ketika section masuk ke viewport
    const { ref, inView } = useInView({
        triggerOnce: true, // Hanya trigger sekali
        threshold: 0.1,    // Trigger ketika 10% element terlihat
    });

    return (
        <div 
            className="bg-[url('/Background.png')] bg-cover bg-center py-16 relative overflow-hidden"
            ref={ref}
            id='lokasi'
        >
            <div className="lg:mx-40 md:mx-16 sm:mx-8 mx-4 relative z-10">
                <div className="flex flex-col gap-8">
                    {/* Teks dengan animasi fade-in dan slide-up */}
                    <div 
                        className={`flex flex-col gap-2 transition-all duration-1000 ease-in-out ${
                            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <h1 className="leading-none font-display text-brown1 text-5xl hover:text-brown2 transition-colors duration-300">
                            Our Location
                        </h1>
                        <p className="text-myBlack md:w-6/12 w-auto leading-none text-justify hover:text-brown1 transition-colors duration-300">
                            JL durian no.4 dusun 2, RT03/RW07, Kalimanah Wetan, Kecamatan Kalimanah, Kabupaten Purbalingga, Jawa Tengah 53371
                        </p>
                    </div>
                    {/* Google Maps dengan animasi fade-in dan efek hover */}
                    <div 
                        className={`w-full h-60 border-4 border-white rounded-2xl shadow-lg overflow-hidden transition-all duration-1000 ease-in-out ${
                            inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        } hover:border-brown2 hover:shadow-2xl`}
                    >
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d679.4953367442799!2d109.33892771564993!3d-7.416661507547941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1740057519239!5m2!1sid!2sid"  
                            loading="lazy"
                            className="w-full h-full"
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                </div>
            </div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-brown2/20 rounded-full blur-2xl z-0"></div>
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-brown1/20 rounded-full blur-2xl z-0"></div>
        </div>
    );
}