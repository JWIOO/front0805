interface typeProps {
    text:string;
}

const Subtext = ({text}:typeProps) => {
    return (
        <div className="subtext">{text}</div>
    );
};
export default Subtext;