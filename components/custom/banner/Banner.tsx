"use client"; // 클라이언트 컴포넌트로 지정
import { useEffect } from "react";
import Image from "next/image";
import styles from "./Banner.module.scss";

const Banner: React.FC = () => {
  useEffect(() => {
    const title = document.querySelector(`.${styles.title}`) as HTMLElement;
    const subtitle = document.querySelector(`.${styles.subtitle}`) as HTMLElement;

    if (title) {
      title.classList.add(styles.fadeIn);
    }

    if (subtitle) {
      subtitle.classList.add(styles.fadeIn);
    }
  }, []);

  return (
      <section className={styles.banner}>
        <div className={styles.aspectRatio}>
          <Image
              src="/images/custom/banner.png"
              alt="Banner"
              layout="fill"
              objectFit="cover"
          />

          {/* Overlay */}
          <div className={styles.overlay}></div>

          <h1 className={styles.title}>Edu Certi</h1>
          <p className={styles.subtitle}>
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세 <br />
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세 무궁화
            삼천리 화려강산
          </p>
        </div>
      </section>
  );
};

export default Banner;
