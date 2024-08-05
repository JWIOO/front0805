"use client"
import Image from "next/image";
import Link from "next/link";
import poster from "@/public/images/case-details/poster.png";
import one from "@/public/images/info/cheating-caution.png";
import two from "@/public/images/info/guide2.png";
import three from "@/public/images/case-details/three.png";
import quote from "@/public/images/case-details/quote.png";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
                            🚫 유의사항
                          </h3>
                          <p data-aos="fade-left" data-aos-delay="1">
                            🔸수험자는 수험시 반드시 수험표와 신분증(신분증 인정범위 참조)을 지참하여야 시험에 응시할 수 있습니다.
                            <br/>
                            🔸수험자는 지정된 입실완료 시간까지 해당 고사실에 입실하지 않으면 시험에 응시할 수 없습니다.
                            <br/>
                            🔸수험자가 다른 수험자의 시험을 방해하거나 부정행위(사후적발 포함)를 했을 경우 당일 응시한 전 과목이 부정 처리되며,
                            <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;  또한 당회차(시험당일 모든 과목)뿐 아니라 향후 2년간 당 본부가 주관하는 모든 시험에 응시할 수 없습니다.
                          </p>
                        </div>
                        <div className="text-group">
                          <h3 className="title-animation fw-6 text-white mt-12">
                            📵 부정 행위 해당 사항
                          </h3>
                          <p data-aos="fade-left" data-aos-delay="1.5">
                            🔸대리시험 및 타인에게 답안을 복사해주거나, 복사 받는 경우
                            <br/>
                            🔸답안 저장장치 외 기타 저장장치에 문제 및 답안을 임의로 복사/저장하는 경우
                            <br/>
                            🔸시험 중 전자·통신기기를 소지하여 적발되는 경우
                            <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ※ 종류: 휴대용 컴퓨터,디지털카메라,음성파일변환기(mp3),전자사전 등
                            <br/>
                            🔸허용된 프로그램 외 무관한 프로그램(게임, SNS 등)을 사용한 경우
                            <br/>
                            🔸휴대폰,메신저,전자메일,무선기기전자시계(갤럭시기어,애플워치 등), 검색기능 등을 사용한 경우
                            <br/>
                            🔸기타 부정행위라고 인정되는 경우
                          </p>


                          <div className="img-group fade-wrapper">
                            <div className="poster-img mb-0 fade-top">
                              <Image src={one} alt="Image" priority/>
                            </div>
                          </div>
                          <p>
                            파일명은 본인의 “수험번호-성명”으로 입력하여 답안폴더(내 PC\문서\ITQ)에 하나의 파일로 저장해야 하며,
                            <br/>답안문서 파일명이 “수험번호-성명”과 일치하지 않거나, 답안파일을 전송하지 않아 미제출로 처리될 경우 실격입니다.
                            <br/>
                            <br/>답안문서는 지정된 경로 외의 다른 보조기억장치에 저장하거나 기타 통신수단(이메일, 메신저, 네트워크 등)을 이용하여 외부 반출 시<br/>
                            부정 또는 실격 처리합니다.
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
                            답안파일를 저장할 때 반드시 지정된 경로에 저장하여야 하며, 만일 지정된 경로외 外 다른 보조기억장치에 저장하였을 경우 <br/>부정행위로 간주하여 실격처리됩니다.
                            또한 파일에러(error)와 답안 미저장시에도 실격 처리됩니다.

                          </p>
                        </div>

                        <div className="img-group fade-wrapper">
                          <div className="poster-img mb-0 fade-top">
                            <Image src={two} alt="Image" priority/>
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
                            답안파일를 저장할 때 반드시 지정된 경로에 저장하여야 하며, 만일 지정된 경로외 外 다른 보조기억장치에 저장하였을 경우 <br/>부정행위로 간주하여 실격처리됩니다.
                            또한 파일에러(error)와 답안 미저장시에도 실격 처리됩니다.

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
