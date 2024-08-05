"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import cant from "@/public/images/certificate/application/cant-apply.png";


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
                          <div className="text-group">
                            <h3 className="title-animation fw-6 text-white mt-12">
                              🟡 사진 규정 안내
                            </h3>
                            <p data-aos="fade-left" data-aos-delay="0.5">
                              &nbsp;&nbsp;&nbsp;✅ 사진 이미지 등록 조건
                              <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;🔸 기 준: 3X4cm 정면상반사진 (최근 6개월 이내에 촬영한 탈모 상반신 사진)
                              <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;🔸 크 기: 가로 115~235픽셀, 세로 150~315픽셀
                              <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;🔸 형 식: PNG 파일 권장(JPG, GIF, PNG 파일 가능)
                              <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;🔸 용 량: 500KB 이하
                              <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;🔸 해상도: 300dpi 권장
                              <br/>
                              <br/>
                            </p>
                            <p data-aos="fade-left" data-aos-delay="0.75">
                              &nbsp;&nbsp;&nbsp;✅ 사진 기준
                              <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;🔸 최근 6개월 이내 촬영한(3x4cm) 컬러, 상반신 정면 탈모사진으로 머리(정수리부터 턱까지)가 모두 노출되어야
                              합니다.
                              <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;🔸 사진 내 얼굴의 윤곽이 뚜렷이 드러나야 합니다.
                              <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;🔸 상반신은 어깨 까지만 나와야 합니다.
                              <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;🔸 사진의 바탕색은 단색으로 별도의 배경이 없어야 합니다.
                              <br/>
                              <br/>
                            </p>
                            <p data-aos="fade-left" data-aos-delay="1">
                              &nbsp;&nbsp;&nbsp;✅ 아래와 같이 잘못된 사진을 등록할 경우 시험 당일 응시 불가합니다.
                              <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;🔸 본인이 아닌 사진
                              <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;🔸 마스크 착용 사진
                              <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;🔸 선글라스, 목도리, 모자 등으로 얼굴을 심하게 가린 사진
                              <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;🔸 두 명 이상이 함께 있는 사진
                              <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;🔸 사진의 규격이 맞지 않아 식별이 불가능한 사진
                              <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;🔸 기타 본인 신분확인이 어려운 사진(연예인 사진, 캐릭터 사진 등)
                              <br/>
                              <br/>
                            </p>
                            <p data-aos="fade-left" data-aos-delay="1.5">
                              &nbsp;&nbsp;&nbsp;✅ 응시불가 사진 유형
                              <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 아래를 확인해주시기 바랍니다.
                              <br/>
                              <Image src={cant} alt="Image" priority data-aos="fade-out"/>
                              <br/>

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
