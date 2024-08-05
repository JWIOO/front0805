import Image from "next/image";
import Link from "next/link";
import CraftThumb from "@/public/images/craft-thumb.png";
import Shape from "@/public/images/footer/shape-one.png";
import Thumb from "@/public/images/tools-thumb-two.png";
import one from "@/public/images/s-j-thumb.png";

const AboutCraft = () => {
  return (
    <section className="section pb-0 craft">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-6 col-xxl-5">
            <div className="section__content">
              <span className="sub-title">Curriculum</span>
              <h2 className="title title-animation">
                커리큘럼 소개
              </h2>
              <p>
                커리큘럼 소개 문구와 관련한 이미지가 들어갈 예정입니다.  <br/>
                커리큘럼 소개 문구와 관련한 이미지가 들어갈 예정입니다.  <br/>
                커리큘럼 소개 문구와 관련한 이미지가 들어갈 예정입니다.  <br/>
                커리큘럼 소개 문구와 관련한 이미지가 들어갈 예정입니다.  <br/>
                커리큘럼 소개 문구와 관련한 이미지가 들어갈 예정입니다.  <br/>

              </p>

            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-7">
            <div className="craft__thumb text-start text-lg-end">
              <div className="reveal-img parallax-img">
                <Image src={one} alt="Image" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="anime-one">
        <Image src={Shape} alt="Image" priority />
      </div>

    </section>
  );
};

export default AboutCraft;
