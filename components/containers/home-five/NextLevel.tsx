import Image from "next/image";
import Link from "next/link";
import Thumb from "@/public/images/n-level-thumb.png";
import Wheel from "@/public/images/wheel.png";

const NextLevel = () => {
  return (
    <section className="section n-level" id="scrollPosition">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-5">
            <div className="n-level__thumb reveal-img parallax-img dir-rtl">
              <Image src={Thumb} alt="Image" className="unset" />
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-1">
            <div className="n-level__content section__content">
              <div className="s-thumb">
                <Image src={Wheel} alt="Image" priority />
              </div>
              <h2 className="title title-animation">
               특정 하나의 커리큘럼(클래스) 소개
              </h2>
              <p>
               이러한 사람들에게 이러한 커리큘럼을 추천한다는 내용입니다.
                우리 커리큘럼의 매력을 듬뿍 뽐내는 멘트를 작성해주세요.
                이러한 사람들에게 이러한 커리큘럼을 추천한다는 내용입니다.
                우리 커리큘럼의 매력을 듬뿍 뽐내는 멘트를 작성해주세요. <br/>
                이러한 사람들에게 이러한 커리큘럼을 추천한다는 내용입니다.
                우리 커리큘럼의 매력을 듬뿍 뽐내는 멘트를 작성해주세요.
              </p>
              <div className="section__content-cta">
                <Link href="sign-in" className="btn btn--primary">
                  바로가기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextLevel;
