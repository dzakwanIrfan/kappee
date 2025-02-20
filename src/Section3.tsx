export const Section3 = () => {
    return (
        <div className="bg-[url('/Background.png')] bg-cover bg-center py-16">
            <div className="lg:mx-40 md:mx-16 sm:mx-8 mx-4">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <h1 className="leading-none font-display text-brown1 text-5xl">Our Location</h1>
                        <p className="text-myBlack md:w-6/12 w-auto leading-none text-justify">JL durian no.4 dusun 2, RT03/RW07, Kalimanah Wetan, Kecamatan Kalimanah, Kabupaten Purbalingga, Jawa Tengah 53371</p>
                    </div>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d679.4953367442799!2d109.33892771564993!3d-7.416661507547941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1740057519239!5m2!1sid!2sid"  
                        loading="lazy"
                        className="w-full h-60 border border-white rounded-2xl shadow shadow-transparent drop-shadow-lg" 
                    >
                    </iframe>
                </div>
            </div>
        </div>
    );
}