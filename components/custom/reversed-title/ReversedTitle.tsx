import Image from "next/image";
import ToolsThumb from "@/public/images/custom/side_image2.png";

const ReversedTitle = () => {
  return (
    <section className="section tools pb-0">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-7">
            <div className="tools__thumb dir-rtl">
              <div className="reveal-img parallax-img">
                <Image src={ToolsThumb} alt="Image" className="unset" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xxl-4 offset-xxl-1 order-first order-lg-last">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReversedTitle;
