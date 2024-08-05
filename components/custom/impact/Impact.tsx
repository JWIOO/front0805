"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./Impact.module.scss";

const ImpactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log("ehllo");
        // Transform class를 더해 실행 (animate-appear: next.config.js에 정의되어있음)
        const appearWord = () => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target
                .querySelectorAll(`.${styles.word}`)
                .forEach((word, index) => {
                  setTimeout(() => {
                    word.classList.add(styles.animateAppear);
                  }, index * 300);
                });
            }
          });
        };

        // 화면에 올라오고 나서 0.2초(200ms) 후 실행
        setTimeout(appearWord, 200);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.impactSection}>
      <div className={styles.aspectRatio}>
        <Image
          src="/images/custom/impact.png"
          alt="Banner"
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.overlay}></div>
        <div className={styles.textContainer}>
          <span className="w-full">
            <span className={styles.word}>꽁꽁 얼어붙은 </span>
            <b className={`${styles.textGoldenrod} ${styles.word}`}>
              {" "}
              한강
              {" "}
            </b>
            <span className={styles.word}>{` 위로 `}</span>
            <b className={`${styles.textGoldenrod} ${styles.word}`}> 고양이</b>
            <span className={styles.word}>{`가 `}</span>
            <b className={`${styles.textGoldenrod} ${styles.word}`}> 걸어</b>
            <span className={styles.word}>다닙니다.</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
