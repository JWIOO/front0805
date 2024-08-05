"use client"

import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 0.5rem; /* 섹션 간격을 절반으로 조정 */
`;

const Container = styled.div`
  .horizon {
    margin-top: 0 !important; /* Horizon 간격을 없앰 */
    margin-bottom: 0.5rem !important;
  }

  .case-d-content-right {
    margin-bottom: 0 !important; /* 글자와 hr 사이의 간격 제거 */
  }

  .text-group {
    margin-bottom: 0 !important; /* 글자와 hr 사이의 간격 최소화 */
  }

  .text-group p {
    margin-bottom: 0 !important; /* p 요소의 하단 여백 제거 */
  }
`;
const NewsDetails = () => {
  return (
    <>
      <section className="section case-details">
        <div className="container">

              <div className="case-details__inner">

                <div className="case-details-meta">
                  <div className="row gaper align-items-center">

                  </div>
                </div>

                    <div className="col-12 col-lg-10">
                        <div className="text-group">
                          <h3 className="title-animation fw-6 text-white mt-12">
                            공지사항
                          </h3>
                          <p>
                            웹사이트를 만들거나 디자인을 할 때면 빈 공간을 채워줄 텍스트나 이미지가 필요하다.
                            요즘 회사에서 템플릿 만들기를 하고 있는데 나 또한 더미 텍스트가 필요했다.
                            그래서 오늘은 더미 텍스트를 생성해주는 사이트를 소개하려고 한다!
                          </p>
                        </div>

                  </div>




              </div>

        </div>
      </section>
      {/*<div>*/}
      {/*  <div className="container">*/}
      {/*    <hr className="horizon"/>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
};

export default NewsDetails;
