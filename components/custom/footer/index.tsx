import IconButton from "./icon-button/IconButton";
import PolicyList from "./policy-list/PolicyList";
import styles from "./Footer.module.scss";
import Instagram from "@/public/icons/custom/icon-instagram.6232efef.svg.svg";
import Facebook from "@/public/icons/custom/icon-facebook-gray.82b9d6b7.svg.svg";
import LinkedIn from "@/public/icons/custom/icon-linkedin.4a36c8bd.svg.svg";
import Youtube from "@/public/icons/custom/icon-youtube.7a99525c.svg.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.section}>
          <b className={styles.title}>자격증 사이트 명칭</b>
          <span className={styles.description}>
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사
            <br />
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세
            <br />
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세
            무궁화
          </span>
        </section>
        <section className={styles.policyContainer}>
          <PolicyList />
          <div className={styles.iconContainer}>
            <IconButton src="/" imgsrc={Instagram} />
            <IconButton src="/" imgsrc={Youtube} />
            <IconButton src="/" imgsrc={Facebook} />
            <IconButton src="/" imgsrc={LinkedIn} />
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
