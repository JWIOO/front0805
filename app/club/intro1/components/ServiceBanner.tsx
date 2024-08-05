import React from "react";
import card1 from "@/public/images/club/entertainment.mp4";

const ServiceBanner: React.FC = () => {
  return (
      <section className="service-banner">
        <div className="container">
          <div className="row gaper align-items-center">
            <div className="col-12 col-md-8">
              <div className="service-banner__content section__content">
                <span className="sub-title">자격증 소개</span>
                <h2 className="light-title title-animation fw-7 text-white">
                  엔터테인먼트 콘텐츠 운용사{" "}
                  <span className="text-primary text-uppercase">ETQ</span>
                </h2>
              </div>
            </div>
            <div className="col-12 col-md-4 d-none d-md-block">
              <div className="service-banner__thumb parallax-img text-center">
                <video
                    src={card1}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: '800px', // 여기를 조정하여 원하는 너비로 설정
                      maxWidth: '2000px', // 최대 너비를 설정하여 비율 유지
                      height: 'auto' // 높이를 자동으로 설정하여 비율 유지
                    }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ServiceBanner;
