import { Icon } from "@iconify/react/dist/iconify.js";
import { ReviewCard } from "./components/ReviewCard";

const reviews = {
    review1: {
        review: '"Tempat yang nyaman dengan kopi yang nikmat. Sempurna untuk bersantai atau bekerja."',
        name: "Pudak Wangi",
        image: "/ana.png",
    },
    review2: {
        review: '"Aromanya menggoda, rasanya juara! Pasti jadi langganan."',
        name: "Ainan Zamzam",
        image: "/ainan.png",
    }
}

export const Section4 = () => {
    return (
        <section className="lg:mx-40 md:mx-16 sm:mx-8 mx-4 pt-16 pb-20 bg-white">
            <div className="flex lg:flex-row flex-col justify-between gap-4">
                <div className="flex flex-col justify-between">
                    <div className="text-[64px] text-brown1 font-display leading-none">Customer</div>
                    <div className="text-[64px] text-brown1 font-display  leading-none">Review</div>
                </div>
                <div className="flex flex-col lg:w-5/12 w-auto lg:items-end items-start lg:gap-4 gap-2">
                    <p className="text-myBlack text-justify">Apa kata pelanggan tentang pengalaman mereka bersama kami? Simak ulasan nyata dari mereka yang telah merasakan kualitas layanan kami!</p>
                    <div className="flex gap-4">
                        <div className="text-brown1 p-[10px] rounded-full bg-brown4 text-base">
                            <Icon icon="mingcute:left-line" />
                        </div>
                        <div className="text-brown1 p-[10px] rounded-full bg-brown4 text-base">
                            <Icon icon="mingcute:right-line" />
                        </div>
                   </div>
                </div>
            </div>
            <div className="flex md:flex-row flex-col justify-between gap-4 md:mt-16 mt-8">
                {Object.values(reviews).map((review, index) => (
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
}