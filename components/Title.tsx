interface TitleProps {
    title: string;
}

const Title = ({ title }: TitleProps) => {
    return (
        <div className="section-title">
            <h2>{title || "default title"}</h2>
            <div className="underline" />
        </div>
    );
};

export default Title;
