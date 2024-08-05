"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./PolicyList.module.scss";

const GridPolicyList = () => {
  return (
    <div className={styles.gridPolicyList}>
      <a href="#" className={styles.policyLink}>
        서비스 이용약관
      </a>
      <a href="#" className={styles.policyLink}>
        통합 금융정보 서비스 약관
      </a>
      <a href="#" className={styles.policyLink}>
        마이데이터 서비스 이용약관
      </a>
      <a href="#" className={styles.policyLink}>
        이용자의 권리 및 유의사항
      </a>
      <a href="#" className={styles.policyLink}>
          채용팀 개인정보 처리방침
      </a>
      <a href="#" className={styles.policyLink}>
        개인정보 처리방침
      </a>
      <a href="#" className={styles.policyLink}>
        서비스 개인정보 처리방침
      </a>
      <a href="#" className={styles.policyLink}>
        영상정보처리기기 운영 관리 방침
      </a>
    </div>
  );
};

const DropdownPolicyList = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.dropdownPolicyList}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.dropdownButton}
      >
        <p>정책 목록 </p>
        <Image
          width={12}
          height={12}
          src={
            isOpen
              ? "/icons/custom/chevron-up.svg"
              : "/icons/custom/chevron-down.svg"
          }
          alt="chevron"
          className={styles.dropdownIcon}
        />
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          <a href="#" className={styles.policyLink}>
            서비스 이용약관
          </a>
          <a href="#" className={styles.policyLink}>
            통합 금융정보 서비스 약관
          </a>
          <a href="#" className={styles.policyLink}>
            마이데이터 서비스 이용약관
          </a>
          <a href="#" className={styles.policyLink}>
            이용자의 권리 및 유의사항
          </a>
          <a href="#" className={styles.policyLink}>
            개인정보 처리방침
          </a>
          <a href="#" className={styles.policyLink}>
            채용팀 개인정보 처리방침
          </a>
          <a href="#" className={styles.policyLink}>
            어드민 서비스 개인정보 처리방침
          </a>
          <a href="#" className={styles.policyLink}>
            영상정보처리기기 운영 관리 방침
          </a>
        </div>
      )}
    </div>
  );
};

const PolicyList = () => {
  return (
    <>
      <GridPolicyList />
      <DropdownPolicyList />
    </>
  );
};

export default PolicyList;
