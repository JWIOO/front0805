"use client"

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from "next/image";
import checkMarkOff from '@/public/images/member/check-mark.png'
import checkMarkOn from '@/public/images/member/check-mark-on.png'
import checkOff from '@/public/images/member/check_off.png'
import checkOn from '@/public/images/member/check_on.png'
import logo from '@/public/images/logo.png'
import { useRouter } from "next/navigation";


const SignAgree = () => {
    const [allChecked, setAllChecked] = useState(false);
    const [termsService, setTermsService] = useState(false);
    const [termsPrivacy, setTermsPrivacy] = useState(false);
    const [checkRealname, setCheckRealname] = useState(false);
    const [termsLocation, setTermsLocation] = useState(false);
    const [termsEmail, setTermsEmail] = useState(false);
    const [termsEvent, setTermsEvent] = useState(false);
    const [agreeIdx, setAgreeIdx] = useState(1);
    const [isShowPopup, setIsShowPopup] = useState(false);

    const handleAllCheck = (e:any) => {
        const checked = e.target.checked;
        setAllChecked(checked);
        setTermsService(checked);
        setTermsPrivacy(checked);
        setCheckRealname(checked);
        setTermsLocation(checked);
        setTermsEmail(checked);
        setTermsEvent(checked);
    };

    const showPopup = (idx:number) => {
        setAgreeIdx(idx)
        setIsShowPopup(true)
    }

    const router = useRouter();


    const agreeContent = [
        {
            title:"EduCerti 이용약관",
            text:'1 개인정보보호법에 따라 네이버에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.',
        },
        {
            title:"개인정보 수집 및 이용",
            text:'2 개인정보보호법에 따라 네이버에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.',
        },
        {
            title:"실명 인증된 아이디로 가입",
            text:'3 개인정보보호법에 따라 네이버에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.',
        },
        {
            title:"위치기반서비스 이용약관",
            text:'4 개인정보보호법에 따라 네이버에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.',
        },
        {
            title:"개인정보 수집 및 이용",
            text:'5 개인정보보호법에 따라 네이버에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.',
        },
    ]


    const PopupSignAgree =({idx}:any)=> (
        <div className={isShowPopup ? 'popup_signagree active' : 'popup_signagree'}>
            <div className="con">
                <h2>{agreeContent[idx-1].title}</h2>
                <div className="agree">
                    {agreeContent[idx-1].text}
                </div>
                <div className="btn_submit_wrap">
                    <button type="button" id="btnAgree" className="btn_submit_agree" onClick={() => setIsShowPopup(false)}>확인</button>
                </div>
            </div>
            <div className="bg"></div>
        </div>
    )

    return (
        <>
            <PopupSignAgree idx={agreeIdx} />
            <div className="signAgree">
                <div className="form_section">
                    <Image src={logo} alt="logo" className='logo' />
                    <div className="check_terms">
                        <div className="check_wrap">
                            <input
                                type="checkbox"
                                id="chk_all"
                                className="blind"
                                checked={allChecked}
                                onChange={handleAllCheck}/>
                            <label htmlFor="chk_all">
                                {
                                    allChecked
                                        ? <Image src={checkOn} alt="checkOn" />
                                        : <Image src={checkOff} alt="checkOff" />
                                }
                                <span className="text check_all">전체 동의하기</span>
                            </label>
                        </div>
                    </div>
                    <div className="terms_desc">실명 인증된 아이디로 가입, 위치기반서비스 이용약관(선택), 이벤트・혜택 정보 수신(선택) 동의를 포함합니다.</div>
                    <ul className="terms_list">
                        <li className="terms_item">
                            <div className="check_terms">
                                <div className="check_wrap">
                                    <input
                                        type="checkbox"
                                        id="termsService"
                                        className="blind"
                                        checked={termsService}
                                        onChange={(e) => setTermsService(e.target.checked)}/>
                                    <label htmlFor="termsService">
                                        {
                                            termsService
                                                ? <Image src={checkOn} alt="checkOn" />
                                                : <Image src={checkOff} alt="checkOff" />
                                        }
                                        <em className="option point">[필수]</em>
                                        <div className="text_wrap">
                                            <span className="text">EduCerti 이용약관</span>
                                            <button className="btn_popup_all" onClick={() => showPopup(1)}>전체</button>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="terms_box">
                                {/* Terms of Service content */}
                                개인정보보호법에 따라 네이버에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.
                            </div>
                        </li>
                        <li className="terms_item">
                            <div className="check_terms">
                                <div className="check_wrap">
                                    <input
                                        type="checkbox"
                                        id="termsPrivacy"
                                        className="blind"
                                        checked={termsPrivacy}
                                        onChange={(e) => setTermsPrivacy(e.target.checked)}/>
                                    <label htmlFor="termsPrivacy">
                                        {
                                            termsPrivacy
                                                ? <Image src={checkOn} alt="checkOn" />
                                                : <Image src={checkOff} alt="checkOff" />
                                        }
                                        <em className="option point">[필수]</em>
                                        <div className="text_wrap">
                                            <span className="text">개인정보 수집 및 이용</span>
                                            <button className="btn_popup_all" onClick={() => showPopup(2)}>전체</button>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="terms_box">
                                {/* Privacy Policy content */}
                                개인정보보호법에 따라 네이버에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.
                            </div>
                        </li>
                        <li className="terms_item">
                            <div className="check_terms">
                                <div className="check_wrap">
                                    <input
                                        type="checkbox"
                                        id="checkRealname"
                                        name="checkRealname"
                                        value="Y"
                                        className="blind"
                                        checked={checkRealname}
                                        onChange={(e) => setCheckRealname(e.target.checked)}/>
                                    <label htmlFor="checkRealname">
                                        {
                                            checkRealname
                                                ? <Image src={checkOn} alt="checkOn" />
                                                : <Image src={checkOff} alt="checkOff" />
                                        }
                                        <em className="option">[선택]</em>
                                        <span className="text">실명 인증된 아이디로 가입</span>
                                        <button className="btn_popup_all" onClick={() => showPopup(3)}>전체</button>
                                    </label>
                                </div>
                            </div>
                            <div className="terms_box">
                                <div className="article">
                                    <p className="article_text">실명 인증된 아이디로 가입하시면 본인인증이 필요한 서비스(네이버 페이, 쇼핑, 멤버십 등)를 가입 후 바로 이용하실 수 있어요.</p>
                                </div>
                            </div>
                        </li>
                        <li className="terms_item">
                            <div className="check_terms">
                                <div className="check_wrap">
                                    <input
                                        type="checkbox"
                                        id="termsLocation"
                                        name="termsLocation"
                                        value="Y"
                                        className="blind"
                                        checked={termsLocation}
                                        onChange={(e) => setTermsLocation(e.target.checked)}/>
                                    <label htmlFor="termsLocation">
                                        {
                                            termsLocation
                                                ? <Image src={checkOn} alt="checkOn" />
                                                : <Image src={checkOff} alt="checkOff" />
                                        }
                                        <em className="option">[선택]</em>
                                        <div className="text_wrap">
                                            <span className="text">위치기반서비스 이용약관</span>
                                            <button className="btn_popup_all" onClick={() => showPopup(4)}>전체</button>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="terms_box">
                                {/* Location-based Service Terms content */}
                                개인정보보호법에 따라 네이버에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.
                            </div>
                        </li>
                        <li className="terms_item">
                            <div className="check_terms">
                                <div className="check_wrap">
                                    <input
                                        type="checkbox"
                                        id="termsEmail"
                                        name="termsEmail"
                                        value="Y"
                                        className="blind"
                                        checked={termsEmail}
                                        onChange={(e) => setTermsEmail(e.target.checked)}/>
                                    <label htmlFor="termsEmail">
                                        {
                                            termsEmail
                                                ? <Image src={checkOn} alt="checkOn" />
                                                : <Image src={checkOff} alt="checkOff" />
                                        }
                                        <em className="option">[선택]</em>
                                        <div className="text_wrap">
                                            <span className="text">개인정보 수집 및 이용</span>
                                            <button className="btn_popup_all" onClick={() => showPopup(5)}>전체</button>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="sub_check_box">
                                <ul className="check_list">
                                    <li className="item">
                                        <div className="check_normal">
                                            <input
                                                type="checkbox"
                                                id="termsEvent"
                                                name="termsEvent"
                                                value="Y"
                                                className="blind"
                                                checked={termsEvent}
                                                onChange={(e) => setTermsEvent(e.target.checked)}/>
                                            <label htmlFor="termsEvent">
                                                {
                                                    termsEvent
                                                        ? <Image src={checkMarkOn} className='terms_icon' alt="" />
                                                        : <Image src={checkMarkOff} className='terms_icon' alt="" />
                                                }
                                                <span className="text">이벤트・혜택 정보 수신</span>
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div
                    className="must_text"
                    id="warnMsg"
                    style={{
                        display: 'none'
                    }}>
                    네이버 혜택 정보를 받으시려면 '개인정보 수집 및 이용'에 동의해 주세요.
                </div>

                <div className="btn_submit_wrap">
                    {
                        (termsService && termsPrivacy)
                            ? <button type="button" id="btnAgree" className="btn_submit_agree" onClick={() => router.push('/sign-up')}>다음</button>
                            : <button type="button" id="btnAgree" className="btn_submit_disabled">다음</button>
                    }
                </div>
            </div>
        </>
    );
};

export default SignAgree;