import Link from "next/link";

interface typeProps {
    text:string;
    nowStep:number;
    type:string;
}

const ButtonStep = ({text, nowStep, type}:typeProps) => {
    const prev = `/certificate${type}/step${nowStep-1}`
    const next = `/certificate${type}/step${nowStep+1}`

    return (
        <div className="btmbtnbox">
            {(nowStep == 2 || nowStep == 3) &&
                <Link className="btn-step prev" href={prev}>이전</Link>
            }
            {
                nowStep == 4
                ? <Link className="btn-step" href={'/'}>{text}</Link>
                : <Link className="btn-step" href={next}>{text}</Link>
            }
        </div>
    );
};
export default ButtonStep;