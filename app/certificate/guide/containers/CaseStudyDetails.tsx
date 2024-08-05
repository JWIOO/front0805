"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import quote from "@/public/images/case-details/quote.png";
import exclamination from "@/public/images/certificate/application/exclamination.png";
import order from "@/public/images/certificate/application/application-guide.png";
import fee from "@/public/images/certificate/application/fee.png";

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
                    <div className="row gaper align-items-center"></div>
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
                          <div className="text-group" data-aos="fade-left" data-aos-delay="0.25">
                            <p>
                              원서접수 내용을 확인합니다. (※반드시 확인하시기 바랍니다.)
                              <br />
                              <br />
                            </p>
                            <h3 className="title-animation fw-6 text-white mt-12">
                              🟡 시험 시간 변경 관련 안내
                            </h3>
                            <p>
                              관련 안내 내용입니다. 관련 안내 내용입니다. 관련 안내
                              내용입니다. 관련 안내 내용입니다. 관련 안내 내용입니다.
                              <br />
                              관련 안내 내용입니다. 관련 안내 내용입니다. 관련 안내
                              내용입니다. 관련 안내 내용입니다. 관련 안내 내용입니다.
                              <br />
                              관련 안내 내용입니다. 관련 안내 내용입니다. 관련 안내
                              내용입니다. 관련 안내 내용입니다. 관련 안내 내용입니다.
                              <br />
                              관련 안내 내용입니다. 관련 안내 내용입니다. 관련 안내
                              내용입니다. 관련 안내 내용입니다. 관련 안내 내용입니다.
                            </p>
                          </div>
                          <div className="text-group" data-aos="fade-left" data-aos-delay="0.5">
                            <h3 className="title-animation fw-6 text-white mt-12">
                              🟡 시험 연기가 가능한 경우
                            </h3>
                            <p>
                              ✅ 관련 안내 내용입니다. 관련 안내 내용입니다.
                              <br />
                              ✅ 관련 안내 내용입니다. 관련 안내 내용입니다.
                              <br />
                              ✅ 관련 안내 내용입니다. 관련 안내 내용입니다.
                              <br />
                              ✅ 관련 안내 내용입니다. 관련 안내 내용입니다.
                              <br />
                              <br />
                              시험연기는 다음 회차 1회에 한함. (단, 시험일 24시간 이전에
                              통보된 경우에 한함)
                            </p>
                          </div>



                          <div className="text-group">
                            <div className="quote-group" data-aos="fade-right"> {/* AOS 애니메이션 속성 추가 */}
                              <Image
                                  src={exclamination}
                                  alt="Image"
                                  priority
                                  data-aos="fade-in"
                              />
                              <div className="content">
                                <q className="primary-text text-white">
                                  각별한 유의 사항
                                </q>
                                <p className="tertiary-text">
                                  관련 내용: 관련 내용명
                                </p>
                              </div>
                            </div>
                            <p>
                              관련 안내 내용입니다. 관련 안내 내용입니다. 관련 안내 내용입니다.
                              <br />
                              관련 안내 내용입니다. 관련 안내 내용입니다. 관련 안내 내용입니다.
                              <br />
                              <br />
                            </p>
                          </div>
                          <div className="text-group" data-aos="fade-left">
                            <h3 className="title-animation fw-6 text-white mt-12">
                              🟡 시험 접수 안내
                            </h3>
                            <Image src={order} alt="Image" priority data-aos="fade-left"/>
                          </div>
                          <div className="text-group" data-aos="fade-left">
                            <h3 className="title-animation fw-6 text-white mt-12">
                              🟡 응시료
                            </h3>
                            <p>
                              개인회원 : 신용카드, 계좌이체
                              <Image src={fee} alt="Image" priority data-aos="fade-left"/>
                            </p>
                            <p data-aos="fade-left">
                              🔶 2024년 6월부터 적용
                              <br />
                              🔶 부가가치세 포함 금액
                              <br />
                              🔶 부가가치세 포함 금액
                              <br />
                              <br />
                            </p>
                          </div>
                          <div className="text-group" data-aos="fade-left">
                            <h3 className="title-animation fw-6 text-white mt-12">
                              🟡 수험표 출력
                            </h3>
                            <p>
                              관련 안내 내용입니다. 관련 안내 내용입니다. 관련 안내 내용입니다.
                              <br />
                              관련 안내 내용입니다. 관련 안내 내용입니다. 관련 안내 내용입니다.

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
            <hr className="horizon" />
          </div>
        </div>
      </>
  );
};

export default CaseStudyDetails;
