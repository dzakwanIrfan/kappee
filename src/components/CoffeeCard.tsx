import { Icon } from "@iconify/react/dist/iconify.js";

interface CoffeeCardProps {
    price: string;
    title: string;
    image: string;
    default?: boolean;
}

export const CoffeeCard = ({ price, title, image, default: isDefault }: CoffeeCardProps) => {
    return (
        <div className={`drop-shadow-lg shadow-sm shadow-transparent transform transition-transform duration-300 hover:-translate-y-2 flex flex-col gap-8 p-8 rounded-2xl justify-center items-center md:w-5/12 sm:w-3/5 w-4/5 ${isDefault ? 'bg-brown1' : 'bg-brown4'}`}>
            <div className="flex justify-between items-start w-full">
                <div className="flex flex-col gap-2 w-full">
                    <div className={`text-lg ${isDefault ? 'text-white' : 'text-myBlack'} leading-none`}>{title}</div>
                    <div className={`${isDefault ? 'text-brown4' : 'text-brown1'} text-[32px] font-display leading-none`}>{price}</div>
                </div>
                <div className="text-4xl">
                    <Icon icon="lsicon:open-new-filled" className={isDefault ? 'text-brown4' : 'text-brown1'} />
                </div>
            </div>
            <img src={image} alt={title} className="object-contain md:h-[200px] h-40" />
        </div>
    );
}