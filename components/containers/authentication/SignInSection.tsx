"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import google from "@/public/images/google.png";
import apple from "@/public/images/apple.png";
import meta from "@/public/images/meta.png";

const SignInSection = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
      <section className="authentication">
        <div className="authentication-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8 col-lg-6 col-xl-4">
                <div className="authentication__content section">
                  <div className="intro">
                    <h2 className="light-title-sm title-animation fw-7 text-white mt-12">
                      로그인
                    </h2>
                    <p>로그인하시겠습니까?</p>
                  </div>
                  <div className="authentication__inner">
                    <form action="#" method="post">
                      <div className="input-single">
                        <label htmlFor="userName">아이디</label>
                        <div className="ic-group">
                          <input
                              type="text"
                              name="user-name"
                              id="userName"
                              placeholder="아이디를 입력해주세요"
                              required
                          />
                          <span className="material-symbols-outlined">
                          person
                        </span>
                        </div>
                      </div>
                      <div className="input-single">
                        <label htmlFor="userPassword">비밀번호</label>
                        <div className="ic-group pass">
                        <span
                            className="material-symbols-outlined show-pass"
                            onClick={togglePasswordVisibility}
                        >
                          {passwordVisible ? "visibility" : "visibility_off"}
                        </span>
                          <input
                              type={passwordVisible ? "text" : "password"}
                              name="user-Password"
                              id="userPassword"
                              placeholder="비밀번호를 입력해주세요"
                              required
                          />
                          <span className="material-symbols-outlined">key</span>
                        </div>
                        <Link href="contact-us">비밀번호 찾기</Link>
                      </div>
                      <div className="section__content-cta">
                        <button type="submit" className="btn btn--primary">
                          로그인
                        </button>
                      </div>
                      <div className="divider">
                        <span></span>
                        <p>소셜 로그인</p>
                        <span></span>
                      </div>
                    </form>
                    <div className="auth-cta">
                      <button>
                        <Image src={google} alt="Image" priority />
                      </button>
                      {/*<button>*/}
                      {/*  <Image src={apple} alt="Image" priority />*/}
                      {/*</button>*/}
                      {/*<button>*/}
                      {/*  <Image src={meta} alt="Image" priority />*/}
                      {/*</button>*/}
                    </div>
                  </div>
                  <div className="auth-footer">
                    <p>
                      회원이 아니신가요?{" "}
                      <Link href="/sign-agree">회원가입</Link>
                    </p>
                    <div className="section__content-cta">
                      <Link href="/" className="btn btn--primary">
                        메인으로 돌아가기
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default SignInSection;
