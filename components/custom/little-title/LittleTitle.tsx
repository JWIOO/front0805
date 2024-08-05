import Image from "next/image";

import CraftThumb from "@/public/images/custom/side_image.png";
import Shape from "@/public/images/footer/shape-one.png";

const LittleTitle = () => {
  return (
    <section className="section craft" id="scrollPosition">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-6 col-xxl-5">
            <div className="section__content">
              <h2 className="title-animation">
                여기에는
                <br /> 이러저러한 소제목이 있어요.
              </h2>
              <span>
                Lorem ipsum dolor sit amet consectetur. Sit nulla arcu tellus
                purus porttitor dui. Facilisis ornare netus pretium donec
                dignissim enim iaculis adipiscing nisl
              </span>
              <h3>#이러이러한 특징</h3>
              <span>
                이러저러한 특징이 있습니다. 이러저러한 특징이 있습니다.
                이러저러한 특징이 있습니다.
              </span>
              <small>*특이사항 있을 시 이렇게 적겠습니다.</small>

              <div className="section__content-cta"></div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-7">
            <div className="craft__thumb text-start text-lg-end">
              <div className="reveal-img parallax-img">
                <Image src={CraftThumb} alt="Image" priority />
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

export default LittleTitle;
