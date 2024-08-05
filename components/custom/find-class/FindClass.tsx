import Image from "next/image";
import styles from "./FindClass.module.scss";

const INFOS = [
  {
    src: "/images/custom/Frame 427318912 (1).png",
    title: "오락실",
    href: "/shop/1",
  },
  {
    src: "/images/custom/Frame 427318912 (2).png",
    title: "오락실",
    href: "/shop/2",
  },
  {
    src: "/images/custom/Frame 427318912 (1).png",
    title: "오락실",
    href: "shop/3",
  },
  {
    src: "/images/custom/Frame 427318912.png",
    title: "오락실",
    href: "shop/4",
  },
  {
    src: "/images/custom/Frame 427318912 (2).png",
    title: "오락실",
    href: "shop/5",
  },
];

const FindClassSection = () => {
  return (
    <section className={styles.findClassSection}>
      <h3 className={styles.title}>
        내게 맞는 <b className={styles.highlight}>클래스</b> 찾으러 가기
      </h3>
      <div className={styles.imageContainer}>
        {INFOS.map((info, index) => (
          <ImageAndText key={index} info={info} />
        ))}
      </div>
    </section>
  );
};

const ImageAndText = ({
  info,
}: {
  info: { src: string; title: string; href: string };
}) => {
  const { title, src, href } = info;
  return (
    <a className={styles.imageAndText} href={href}>
      <div className={styles.image}>
        <Image width={160} height={140} alt={title} src={src} />
      </div>
      {/* 지금은 사진에 글씨가 쓰여있어 주석처리 해둠. 나중에 글씨가 필요하다면 주석 해제하기 */}
      {/* <h2 className={`${styles.imageText} ${styles.highlight}`}>
        {title}
      </h2> */}
    </a>
  );
};

export default FindClassSection;
