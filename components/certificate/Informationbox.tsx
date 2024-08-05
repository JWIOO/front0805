import visual from '@/public/images/certificate/img_step.png'
import Image from 'next/image';

interface typeProps {
  text:string;
}

const Informationbox = ({text}:typeProps) => {
  return (
    <div className="informationbox">
      <div className="text">{text}</div>
      <div className="img">
        <Image src={visual} alt="" />
      </div>
    </div>
  );
};

export default Informationbox;
