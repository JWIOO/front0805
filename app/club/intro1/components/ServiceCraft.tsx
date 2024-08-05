import Image from "next/image";
import Link from "next/link";
import Thumb from "@/public/images/home-seven/six.png";

const ServiceCraft = () => {
  return (
    <section className="section craft craft-alt">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-6 col-xxl-5">
            <div className="section__content">
              {/*<span className="sub-title">자격증 소개</span>*/}
              <h2 className="title title-animation">
                엔터테인먼트 자격증 관련 소개멘트
              </h2>
              <p>
                흰색 바탕은 밝음과 순수, 그리고 전통적으로 평화를 사랑하는 우리의 민족성을 나타냅니다. 태극 문양은 음(파랑)과 양(빨강)의 조화를 상징하는 것으로 우주 만물이 음양의 조화로 인해 생명을 얻고 발전한다는 대자연의 진리를 표현해낸 것입니다.
              </p>
              {/*<div className="section__content-cta">*/}
              {/*  <Link href="shop" className="btn btn--primary">*/}
              {/*    신청하러가기*/}
              {/*  </Link>*/}
              {/*</div>*/}
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-7">
            <div className="craft__thumb text-start text-lg-end">
              <div className="reveal-img parallax-img">
                <Image src={Thumb} alt="Image" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCraft;
