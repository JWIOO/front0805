import React from "react";
import styles from "./Last.module.scss";

const LastSection = () => {
  return (
    <section className={styles.lastSection}>
      <b className={styles.title}>
        <p>안녕하세요? 반가워요.</p>
        <p>여기 부분이 마지막 섹션입니다.</p>
      </b>
      <div className={styles.content}>
        <b className={styles.textBlock}>
          <p>{`약간 뭐랄까 마지막 섹션처럼 느껴지지 않을 수 있어서, `}</p>
          <p>
            <span>{`멘트를 살짝 `}</span>
            <span className={styles.highlight}>마무리하는 듯한 멘트</span>
            <span> 를 써야할 거 같다는 생각.</span>
          </p>
          <p>
            <span>예를 들자면, ‘</span>
            <span className={styles.highlight}>
              그럼, 이제 함께 독수리처럼 떠나볼까요? 훨훨~
            </span>
            <span className={styles.silver}>’</span>
          </p>
        </b>
        <b className={styles.textBlock}>
          <p>{`약간 뭐랄까 마지막 섹션처럼 느껴지지 않을 수 있어서, `}</p>
          <p>
            <span>{`멘트를 살짝 `}</span>
            <span className={styles.highlight}>마무리하는 듯한 멘트</span>
            <span> 를 써야할 거 같다는 생각.</span>
          </p>
          <p>
            <span>예를 들자면, ‘</span>
            <span className={styles.highlight}>
              그럼, 이제 함께 독수리처럼 떠나볼까요? 훨훨~
            </span>
            <span className={styles.silver}>’</span>
          </p>
        </b>
      </div>
    </section>
  );
};

export default LastSection;
