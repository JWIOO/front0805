"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./Carousel.module.scss";

const images = [
  {
    src: "/images/custom/slide1.png",
    title: "대충 뭐 소제목",
    description:
      "소제목에 대한 설명입니다.소제목에 대한 설명입니다. 소제목에 대한 설명입니다.소제목에 대한 설명입니다. 소제목에 대한 설명입니다.",
  },
  {
    src: "/images/custom/slide2.png",
    title: "대충 뭐 소제목",
    description:
      "소제목에 대한 설명입니다.소제목에 대한 설명입니다. 소제목에 대한 설명입니다.소제목에 대한 설명입니다. 소제목에 대한 설명입니다.",
  },
  {
    src: "/images/custom/slide3.png",
    title: "대충 뭐 소제목",
    description:
      "소제목에 대한 설명입니다.소제목에 대한 설명입니다. 소제목에 대한 설명입니다.소제목에 대한 설명입니다. 소제목에 대한 설명입니다.",
  },
  {
    src: "/images/custom/slide2.png",
    title: "대충 뭐 소제목",
    description:
      "소제목에 대한 설명입니다.소제목에 대한 설명입니다. 소제목에 대한 설명입니다.소제목에 대한 설명입니다. 소제목에 대한 설명입니다.",
  },
  {
    src: "/images/custom/slide3.png",
    title: "대충 뭐 소제목",
    description:
      "소제목에 대한 설명입니다.소제목에 대한 설명입니다. 소제목에 대한 설명입니다.소제목에 대한 설명입니다. 소제목에 대한 설명입니다.",
  },
  {
    src: "/images/custom/slide1.png",
    title: "대충 뭐 소제목",
    description:
      "소제목에 대한 설명입니다.소제목에 대한 설명입니다. 소제목에 대한 설명입니다.소제목에 대한 설명입니다. 소제목에 대한 설명입니다.",
  },
  {
    src: "/images/custom/slide1.png",
    title: "대충 뭐 소제목",
    description:
      "소제목에 대한 설명입니다.소제목에 대한 설명입니다. 소제목에 대한 설명입니다.소제목에 대한 설명입니다. 소제목에 대한 설명입니다.",
  },
  {
    src: "/images/custom/slide1.png",
    title: "대충 뭐 소제목",
    description:
      "소제목에 대한 설명입니다.소제목에 대한 설명입니다. 소제목에 대한 설명입니다.소제목에 대한 설명입니다. 소제목에 대한 설명입니다.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevInPC = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 3 ? prevIndex - 4 : 0));
  };

  const handleNextInPC = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 7 ? prevIndex + 4 : images.length - 4
    );
  };
  const handlePrevInMobile = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 2 ? prevIndex - 3 : 0));
  };

  const handleNextInMobile = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 5 ? prevIndex + 3 : images.length - 3
    );
  };

  return (
    <section className={styles.carouselSection}>
      <div className={styles.carouselHeader}>
        <div className={styles.carouselTitle}>
          <span>
            <p className={styles.littleImportant}>
              중요하지만 아래 문구보단 덜 중요한 문구
            </p>
            <p className={styles.gradientText}>강력한 문구</p>
          </span>
        </div>

        <div className={styles.PCbuttonGroup}>
          <button
            onClick={handlePrevInPC}
            disabled={currentIndex <= 0}
            className={`${styles.carouselButton} ${
              currentIndex <= 0 ? styles.disabled : ""
            }`}
          >
            <Image
              width={10}
              height={10}
              src="/icons/custom/prev.svg"
              alt="prevIcon"
            />
          </button>
          <button
            onClick={handleNextInPC}
            disabled={currentIndex >= images.length - 4}
            className={`${styles.carouselButton} ${
              currentIndex >= images.length - 4 ? styles.disabled : ""
            }`}
          >
            <Image
              width={10}
              height={10}
              src="/icons/custom/next.svg"
              alt="nextIcon"
            />
          </button>
        </div>

        <div className={styles.MobilebuttonGroup}>
          <button
            onClick={handlePrevInMobile}
            disabled={currentIndex <= 0}
            className={`${styles.carouselButton} ${
              currentIndex <= 0 ? styles.disabled : ""
            }`}
          >
            <Image
              width={10}
              height={10}
              src="/icons/custom/prev.svg"
              alt="prevIcon"
            />
          </button>
          <button
            onClick={handleNextInMobile}
            disabled={currentIndex >= images.length - 3}
            className={`${styles.carouselButton} ${
              currentIndex >= images.length - 3 ? styles.disabled : ""
            }`}
          >
            <Image
              width={10}
              height={10}
              src="/icons/custom/next.svg"
              alt="nextIcon"
            />
          </button>
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <div
          className={`${styles.PCcarouselTrack}`}
          style={{ transform: `translateX(-${currentIndex * 26}%)` }}
        >
          {images.map((image, index) => (
            <Card
              key={index}
              src={image.src}
              title={image.title}
              description={image.description}
            />
          ))}
        </div>

        <div
          className={`${styles.MobilecarouselTrack} `}
          style={{ transform: `translateX(-${currentIndex * 34.5}%)` }}
        >
          {images.map((image, index) => (
            <Card
              key={index}
              src={image.src}
              title={image.title}
              description={image.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) => {
  return (
    <div className={styles.carouselCard}>
      <Image
        width={160}
        height={130}
        src={src}
        alt={src}
        className={styles.carouselImage}
      />
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.cardDescription}>{description}</div>
    </div>
  );
};

export default Carousel;
