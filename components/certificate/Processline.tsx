interface typeProps {
  step:number;
}

const Processline = ({step}:typeProps) => {
  return (
    <ul className="processline">
      <li className={step>=1 ? 'active' : ''}>
        <div className="num">1</div>
        <p>필수 커리큘럼 수강</p>
      </li>
      <li className={step>=2 ? 'active' : ''}>
        <div className="num">2</div>
        <p>필기 시험</p>
      </li>
      <li className={step>=3 ? 'active' : ''}>
        <div className="num">3</div>
        <p>실기 시험</p>
      </li>
      <li className={step==4 ? 'active' : ''}>
        <div className="num">4</div>
        <p>정상 제출</p>
      </li>
    </ul>
  );
};

export default Processline;
