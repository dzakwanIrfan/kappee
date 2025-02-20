import { Icon } from "@iconify/react/dist/iconify.js";

interface ReviewCardProps {
    review: string;
    name: string;
    image: string;
}

export const ReviewCard = ({review, name, image}: ReviewCardProps) => {
    return (
        <div className="bg-brown4 p-8 rounded-2xl flex flex-col gap-8 md:w-6/12 w-auto relative">
            <div className="absolute bottom-0 right-0 text-brown1 opacity-20 text-9xl">
                <Icon icon="game-icons:coffee-beans" />
            </div>
            <div className="flex flex-col">
                <div className="flex">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="text-brown1 text-xl">
                            <Icon icon="material-symbols:star-rounded" />
                        </div>
                    ))}
                </div>
                <p className="font-bold text-brown2 text-2xl">{review}</p>
            </div>
            <div className="flex gap-4 items-center">
                <img src={image} alt="Pudak Wangi" className="object-cover size-16" />
                <div className="flex flex-col gap-1">
                    <p className="font-bold text-myBlack">{name}</p>
                    <p className="text-brown3">Coffee Enthusiast</p>
                </div>
            </div>
        </div>
    );
}