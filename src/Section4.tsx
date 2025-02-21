import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ReviewCard } from "./components/ReviewCard";
import { useInView } from "react-intersection-observer";

const reviews = [
    {
        review: '"Tempat yang nyaman dengan kopi yang nikmat. Sempurna untuk bersantai atau bekerja."',
        name: "Pudak Wangi",
        image: "/ana.png",
    },
    {
        review: '"Aromanya menggoda, rasanya juara! Pasti jadi langganan."',
        name: "Ainan Zamzam",
        image: "/ainan.png",
    },
    {
        review: '"Pelayanan ramah dan kopinya bikin ketagihan. Recommended banget!"',
        name: "Anton Fia",
        image: "/anton.png",
    },
    {
        review: '"Suasana cozy, cocok buat nongkrong atau meeting santai."',
        name: "Gilang Maulana",
        image: "/gilang.png",
    },
];

export const Section4 = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    const visibleReviews = [
        reviews[currentIndex],
        reviews[(currentIndex + 1) % reviews.length],
    ];

    return (
        <section className={`lg:mx-40 md:mx-16 sm:mx-8 mx-4 pt-16 pb-20 bg-white transition-all duration-1000 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} ref={ref}>
            <div className="flex lg:flex-row flex-col justify-between gap-4">
                <div className="flex flex-col justify-between">
                    <div className="text-[64px] text-brown1 font-display leading-none">Customer</div>
                    <div className="text-[64px] text-brown1 font-display leading-none">Review</div>
                </div>
                <div className="flex flex-col lg:w-5/12 w-auto lg:items-end items-start lg:gap-4 gap-2">
                    <p className="text-myBlack text-justify">Apa kata pelanggan tentang pengalaman mereka bersama kami? Simak ulasan nyata dari mereka yang telah merasakan kualitas layanan kami!</p>
                    <div className="flex gap-4">
                        <button 
                            onClick={handlePrev}
                            className="text-brown1 p-[10px] rounded-full bg-brown4 text-base hover:bg-brown3 transition-colors duration-300"
                        >
                            <Icon icon="mingcute:left-line" />
                        </button>
                        <button 
                            onClick={handleNext}
                            className="text-brown1 p-[10px] rounded-full bg-brown4 text-base hover:bg-brown3 transition-colors duration-300"
                        >
                            <Icon icon="mingcute:right-line" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex md:flex-row flex-col justify-between gap-4 md:mt-16 mt-8">
                {visibleReviews.map((review, index) => (
                    <ReviewCard
                        key={index}
                        review={review.review}
                        name={review.name}
                        image={review.image}
                    />
                ))}
            </div>
        </section>
    );
};