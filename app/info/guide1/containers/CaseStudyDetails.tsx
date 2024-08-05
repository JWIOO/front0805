"use client"
import Image from "next/image";
import Link from "next/link";
import quote from "@/public/images/case-details/quote.png";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import one from "@/public/images/info/guide1.png";

const CaseStudyDetails = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section className="section case-details">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="case-details__inner">

                <div className="case-details-meta">
                  <div className="row gaper align-items-center">

                  </div>
                </div>
                <div className="case-details__content sticky-parent">
                  <div className="row gaper">
                    <div className="col-12 col-lg-2">
                      <div className="case-d-content-left sticky-item">
                        <p className="tertiary-text text-white">Share</p>
                        <div className="social">
                          <Link
                            href="https://www.facebook.com/"
                            target="_blank"
                            aria-label="share us on facebook"
                            title="facebook"
                          >
                            <i className="bi bi-facebook"></i>
                          </Link>
                          <Link
                            href="https://www.twitter.com/"
                            target="_blank"
                            aria-label="share us on twitter"
                            title="twitter"
                          >
                            <i className="bi bi-twitter"></i>
                          </Link>
                          <Link
                            href="https://www.linkedin.com/"
                            target="_blank"
                            aria-label="share us on pinterest"
                            title="linkedin"
                          >
                            <i className="bi bi-linkedin"></i>
                          </Link>
                          <Link
                            href="https://www.instagram.com/"
                            target="_blank"
                            aria-label="share us on instagram"
                            title="instagram"
                          >
                            <i className="bi bi-instagram"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-10">
                      <div className="case-d-content-right sticky-item">
                        <div className="text-group">
                          <h3 className="title-animation fw-6 text-white mt-12">
                            🟡 서비스 정책 내용 1
                          </h3>
                          <p data-aos="fade-left" data-aos-delay="1">
                            웹사이트를 만들거나 디자인을 할 때면 빈 공간을 채워줄 텍스트나 이미지가 필요하다.
                            요즘 회사에서 템플릿 만들기를 하고 있는데 나 또한 더미 텍스트가 필요했다.
                            그래서 오늘은 더미 텍스트를 생성해주는 사이트를 소개하려고 한다!
                          </p>
                        </div>
                        <div className="text-group">
                          <h3 className="title-animation fw-6 text-white mt-12">
                            🟡 서비스 정책 내용 2
                          </h3>
                          <p data-aos="fade-left" data-aos-delay="1">
                            웹사이트를 만들거나 디자인을 할 때면 빈 공간을 채워줄 텍스트나 이미지가 필요하다.
                            요즘 회사에서 템플릿 만들기를 하고 있는데 나 또한 더미 텍스트가 필요했다.
                            그래서 오늘은 더미 텍스트를 생성해주는 사이트를 소개하려고 한다! 웹사이트를 만들거나 디자인을 할 때면 빈 공간을 채워줄 텍스트나 이미지가 필요하다.
                            요즘 회사에서 템플릿 만들기를 하고 있는데 나 또한 더미 텍스트가 필요했다.
                            그래서 오늘은 더미 텍스트를 생성해주는 사이트를 소개하려고 한다!
                          </p>
                          <p data-aos="fade-left" data-aos-delay="1">
                            웹사이트를 만들거나 디자인을 할 때면 빈 공간을 채워줄 텍스트나 이미지가 필요하다.
                            요즘 회사에서 템플릿 만들기를 하고 있는데 나 또한 더미 텍스트가 필요했다.
                            그래서 오늘은 더미 텍스트를 생성해주는 사이트를 소개하려고 한다! 웹사이트를 만들거나 디자인을 할 때면 빈 공간을 채워줄 텍스트나 이미지가 필요하다.
                          </p>
                        </div>

                        <div className="img-group fade-wrapper">
                          <div className="poster-img mb-0 fade-top">
                            <Image src={one} alt="Image" priority/>
                          </div>
                        </div>


                        <div className="text-group">
                          <div className="quote-group" data-aos="fade-right">
                            <Image src={quote} alt="Image" priority/>
                            <div className="content">
                              <q className="primary-text text-white">
                                이럴 때는 언제 어떻게 해야 하나요?
                              </q>
                              <p className="tertiary-text">관련 내용: 관련내용명</p>
                            </div>
                          </div>
                          <p data-aos="fade-right">
                            디자인을 할 때 빈 영역의 텍스트를 주로 영어로 채워 넣게 된다
                            왠지 영어로 쓰면 있어 보여서? 또는 영어로 해두면 좀 더 이뻐 보여서? 등등
                            <br/>
                            디자인을 할 때 빈 영역의 텍스트를 주로 영어로 채워 넣게 된다
                            왠지 영어로 쓰면 있어 보여서? 또는 영어로 해두면 좀 더 이뻐 보여서? 등등
                          </p>
                        </div>

                        <div className="text-group">
                          <div className="quote-group" data-aos="fade-right">
                            <Image src={quote} alt="Image" priority/>
                            <div className="content">
                              <q className="primary-text text-white">
                                이럴 때는 언제 어떻게 해야 하나요?
                              </q>
                              <p className="tertiary-text">관련 내용: 관련내용명</p>
                            </div>
                          </div>
                          <p data-aos="fade-right">
                            디자인을 할 때 빈 영역의 텍스트를 주로 영어로 채워 넣게 된다
                            왠지 영어로 쓰면 있어 보여서? 또는 영어로 해두면 좀 더 이뻐 보여서? 등등
                            <br/>
                            디자인을 할 때 빈 영역의 텍스트를 주로 영어로 채워 넣게 된다
                            왠지 영어로 쓰면 있어 보여서? 또는 영어로 해두면 좀 더 이뻐 보여서? 등등
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="container">
          <hr className="horizon"/>
        </div>
      </div>
    </>
  );
};

export default CaseStudyDetails;
