import Image from "next/image";
import one from "@/public/images/s-j-thumb.png";


const ServiceBanner = () => {
  return (
    <section className="service-banner">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-md-8">
            <div className="service-banner__content section__content">
              {/*<span className="sub-title">원서 접수</span>*/}
              <h2 className="light-title title-animation fw-7 text-white">
                원서 접수{" "}
                <span className="text-primary text-uppercase">원서 접수 신청</span>
              </h2>
            </div>
          </div>
          <div className="col-12 col-md-4 d-none d-md-block">
            <div className="service-banner__thumb parallax-img text-center">
              <Image src={one} alt="Image" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
