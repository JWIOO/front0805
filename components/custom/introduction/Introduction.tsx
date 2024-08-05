import React from "react";
import styles from "./Introduction.module.scss";

const IntroductionSection = () => {
  return (
    <section className={styles.introductionSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>버거킹 vs 맥도날드</h1>
        <div className={styles.contentContainer}>
          <div className={styles.contentBlock}>
            <div className={styles.contentTitle}>
              우리들의 <b className={styles.highlight}>버거킹 와퍼</b>는 말이죠
            </div>
            <div className={styles.contentText}>
              <span>
                <span>동해 물과 백두산이 마르고 </span>
                <span className={styles.highlight}> 포인트</span>
                <span>
                  {" "}
                  닳도록 하느님이 보우하사 우리나라 만세무궁화 삼천리{" "}

                <span className={styles.highlight}>포인트</span>
                   </span>
                <span>
                  {" "}
                  화려강산 대한 사람 대한으로 길이 보전하세 동해 물과 백두산이
                  마르고 닳도록 하느님이 보우하사 우리나라{" "}

                <span className={styles.highlight}>포인트</span>
                  </span>
                <span>
                  {" "}
                  만세무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세{" "}
                </span>
              </span>
            </div>
          </div>

          <div className={styles.contentBlock}>
            <div className={styles.contentTitle}>
              우리들의 <b className={styles.highlight}>맥도날드 스낵랩</b>은
              말이죠
            </div>
            <div className={styles.contentText}>
              <span>
                <span>동해 물과 백두산이 마르고 </span>
                <span className={styles.highlight}>포인트</span>
                <span>
                  {" "}
                  닳도록 하느님이 보우하사 우리나라 만세무궁화 삼천리{" "}
                </span>
                <span className={styles.highlight}>포인트</span>
                <span>
                  {" "}
                  화려강산 대한 사람 대한으로 길이 보전하세 동해 물과 백두산이
                  마르고 닳도록 하느님이 보우하사 우리나라{" "}

                <span className={styles.highlight}>포인트</span>
                     </span>
                <span>
                  {" "}
                  만세무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세{" "}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
