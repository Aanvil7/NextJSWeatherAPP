type CardProps = Readonly<{
    children: React.ReactNode;
}>;

export default function Card({ children }: CardProps) {
    return (
        <div className="bg-card-bg shadow-xl rounded-xl pt-6 pb-12 px-24">
            {children}
        </div>
    );
}
