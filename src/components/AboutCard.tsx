interface AboutCardProps {
    icon: React.ReactNode;
    title: string;
    text: string;
}

export const AboutCard = ({ icon, title, text }: AboutCardProps) => {
    return (
        <div className="flex flex-1 bg-brown4 p-8 rounded-3xl gap-4 justify-center xl:h-48 items-start transform transition-transform duration-300 hover:-translate-y-2">
            <div className="text-4xl text-brown1">
                {icon}
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-brown1 font-display text-2xl">
                    {title}
                </div>
                <p className="text-myBlack">
                    {text}
                </p>
            </div>
        </div>
    );
}