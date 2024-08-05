"use client"; // 클라이언트 컴포넌트로 지정

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS 파일 추가
import quote from "@/public/images/case-details/quote.png";

const CaseStudyDetails = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // 애니메이션 지속 시간 설정 (밀리초)
      once: false, // 애니메이션이 한 번만 실행되도록 설정
    });
  }, []); // 빈 배열을 넣어 컴포넌트가 마운트될 때만 실행되도록 함

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
                      <div className="col-12 col-lg-12">
                        <div className="case-d-content-right sticky-item">
                          <div className="text-group" data-aos="fade-in">
                            <h3 className="title-animation fw-6 text-white mt-12">
                              스타트업 자격증 소개1
                            </h3>
                            <p>
                              이런저러한 자격증에 대해 소개하는 공간입니다. 예를 들자면, 자격증 정보/진로 및 전망/시험 안내/추천 커리큘럼 등이 들어갑니다. 최대한 매력적으로 기재해주세요.
                              <br/>
                              이런저러한 자격증에 대해 소개하는 공간입니다. 예를 들자면, 자격증 정보/진로 및 전망/시험 안내/추천 커리큘럼 등이 들어갑니다. 최대한 매력적으로 기재해주세요.
                              <br/>
                              이런저러한 자격증에 대해 소개하는 공간입니다. 예를 들자면, 자격증 정보/진로 및 전망/시험 안내/추천 커리큘럼 등이 들어갑니다. 최대한 매력적으로 기재해주세요.
                              <br/>
                              이런저러한 자격증에 대해 소개하는 공간입니다. 예를 들자면, 자격증 정보/진로 및 전망/시험 안내/추천 커리큘럼 등이 들어갑니다. 최대한 매력적으로 기재해주세요.
                              <br/>
                              이런저러한 자격증에 대해 소개하는 공간입니다. 예를 들자면, 자격증 정보/진로 및 전망/시험 안내/추천 커리큘럼 등이 들어갑니다. 최대한 매력적으로 기재해주세요.
                              <br/>
                              이런저러한 자격증에 대해 소개하는 공간입니다. 예를 들자면, 자격증 정보/진로 및 전망/시험 안내/추천 커리큘럼 등이 들어갑니다. 최대한 매력적으로 기재해주세요.
                              <br/>
                              이런저러한 자격증에 대해 소개하는 공간입니다. 예를 들자면, 자격증 정보/진로 및 전망/시험 안내/추천 커리큘럼 등이 들어갑니다. 최대한 매력적으로 기재해주세요.
                            </p>
                          </div>
                          <div className="text-group" data-aos="fade-in">
                            <h3 className="title-animation fw-6 text-white mt-12">
                              스타트업 자격증 소개2
                            </h3>
                            <p>
                              이런저러한 자격증에 대해 소개하는 공간입니다. 예를 들자면, 자격증 정보/진로 및 전망/시험 안내/추천 커리큘럼 등이 들어갑니다. 최대한 매력적으로 기재해주세요.
                              <br/>
                              이런저러한 자격증에 대해 소개하는 공간입니다. 예를 들자면, 자격증 정보/진로 및 전망/시험 안내/추천 커리큘럼 등이 들어갑니다. 최대한 매력적으로 기재해주세요.
                              <br/>
                              이런저러한 자격증에 대해 소개하는 공간입니다. 예를 들자면, 자격증 정보/진로 및 전망/시험 안내/추천 커리큘럼 등이 들어갑니다. 최대한 매력적으로 기재해주세요.
                              <br/>
                              이런저러한 자격증에 대해 소개하는 공간입니다. 예를 들자면, 자격증 정보/진로 및 전망/시험 안내/추천 커리큘럼 등이 들어갑니다. 최대한 매력적으로 기재해주세요.
                            </p>

                            <p>
                              이런저러한 자격증에 대해 소개하는 공간입니다. 예를 들자면, 자격증 정보/진로 및 전망/시험 안내/추천 커리큘럼 등이 들어갑니다. 최대한 매력적으로 기재해주세요.
                            </p>
                          </div>
                          <div className="text-group" data-aos="fade-right">
                            <div className="quote-group">
                              <Image src={quote} alt="Image" priority/>
                              <div className="content">
                                <q className="primary-text text-white">
                                  이 자격증이 어떻게 쓰일까요?
                                </q>
                                <p className="tertiary-text">#해시태그1 #해시태그2 #해시태그3</p>
                              </div>
                            </div>
                            <p>
                              이 물음에 대한 답변을 기재합니다. 이 물음에 대한 답변을 기재합니다. 이 물음에 대한 답변을 기재합니다.
                              <br/>
                              이 물음에 대한 답변을 기재합니다. 이 물음에 대한 답변을 기재합니다. 이 물음에 대한 답변을 기재합니다.
                            </p>
                          </div>

                          <div className="text-group" data-aos="fade-right">
                            <div className="quote-group">
                              <Image src={quote} alt="Image" priority/>
                              <div className="content">
                                <q className="primary-text text-white">
                                  이 자격증이 언제 쓰일까요?
                                </q>
                                <p className="tertiary-text">#해시태그1 #해시태그2 #해시태그3</p>
                              </div>
                            </div>
                            <p>
                              이 물음에 대한 답변을 기재합니다. 이 물음에 대한 답변을 기재합니다. 이 물음에 대한 답변을 기재합니다.
                              <br/>
                              이 물음에 대한 답변을 기재합니다. 이 물음에 대한 답변을 기재합니다. 이 물음에 대한 답변을 기재합니다.
                              <br/>
                              이 물음에 대한 답변을 기재합니다. 이 물음에 대한 답변을 기재합니다. 이 물음에 대한 답변을 기재합니다.
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
