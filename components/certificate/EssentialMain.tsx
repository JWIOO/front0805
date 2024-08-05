'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import imgLock1 from '@/public/images/certificate/img_lock1.png'
import imgLock2 from '@/public/images/certificate/img_lock2.png'
import arrowDown from '@/public/images/certificate/arrow_down.png'
import icoCheck from '@/public/images/certificate/ico_check.png'
import icoHuman from '@/public/images/certificate/ico_human.png'
import icoRefresh from '@/public/images/certificate/ico_refresh.png'
import icoRotate from '@/public/images/certificate/ico_rotate.png'
import icoLock from '@/public/images/certificate/ico_lock.png'
import icoTrash from '@/public/images/certificate/ico_trash.png'
import banner1 from '@/public/images/certificate/banner1.png'
import banner2 from '@/public/images/certificate/banner2.png'
import banner3 from '@/public/images/certificate/banner3.png'
import dividerbar from '@/public/images/certificate/dividerbar.png'
import bgBall from '@/public/images/certificate/bg_ball.png'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation';

const EssentialMain = () => {
    // test1234 와 test5678
    const [inputValue, setInputValue] = useState('');
    const [mounted, setMounted] = useState(false);
    const [codetext, setCodetext] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();
    const type = searchParams.get('type');

    useEffect(() => {
        setMounted(true);
        AOS.init({
            duration: 1000, // 애니메이션 지속 시간 (ms)
            once: true, // 스크롤할 때 한 번만 애니메이션 적용
        });
    }, []);

    useEffect(() => {
        if (inputValue === 'test1234' || inputValue === 'test5678') {
            router.push(`/certificate${type}/step1`);
            setCodetext('코드가 일치합니다.');
        } else {
            if (inputValue === '') {
                setCodetext('');
            } else {
                setCodetext('코드가 일치하지 않습니다. 다시 시도해주세요.');
            }
        }
    }, [inputValue, type, router]);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };


    if (!mounted) return null;

    return (
        <div className="essentialMain">
            <div className="visual maxWidthWrap">
                <div className="text">
                    <h2>필수 커리큘럼 수강 면제 대상입니다.</h2>
                    <p>
                        가장 하단으로 내려가,  코드를 입력해주세요~!<br />
                        가장 하단으로 내려가,  코드를 입력해주세요~!<br />
                        가장 하단으로 내려가,  코드를 입력해주세요~!
                    </p>
                </div>
                <div className="img floating">
                    <Image src={imgLock1} alt="" />
                </div>
                <button className="btn-godown">
                    <Image src={arrowDown} alt="아래로 이동" className="animated-arrow no-cursor"/>
                </button>
            </div>

            <div className="detailinfo">
                <div className="maxWidthWrap">
                    <div className="bannerbox banner1" data-aos="fade-left" data-aos-delauy="0.25" data-aos-easing="ease-in-out" data-aos-duration="1000">
                        <div className="text">
                            <h3>더 이상,<br />
                                까마귀가 아니에요</h3>
                            <p>
                            그동안 까마귀로 살아오셨나요?<br />
                            이제는 더이상 까마귀가 아니랍니다.<br />
                            <b className="c_gold">비상</b> 할 준비를 하세요.
                            </p>
                        </div>
                        <Image src={banner1} alt="" />
                    </div>
                    <div className="bannerbox banner2" data-aos="fade-right" data-aos-delauy="0.5" data-aos-easing="ease-in-out" data-aos-duration="1000">
                        <div className="text">
                            <h3>더 이상,<br />
                                까마귀가 아니에요</h3>
                            <p>
                            그동안 까마귀로 살아오셨나요?<br />
                            이제는 더이상 까마귀가 아니랍니다.<br />
                            <b className="c_gold">비상</b> 할 준비를 하세요.
                            </p>
                        </div>
                        <Image src={banner2} alt="" />
                    </div>
                    <div className="bannerbox banner3" data-aos="fade-left" data-aos-delauy="0.75" data-aos-easing="ease-in-out" data-aos-duration="1000">
                        <div className="text">
                            <h3>더 이상,<br />
                                까마귀가 아니에요</h3>
                            <p>
                            그동안 까마귀로 살아오셨나요?<br />
                            이제는 더이상 까마귀가 아니랍니다.<br />
                            <b className="c_gold">비상</b> 할 준비를 하세요.
                            </p>
                        </div>
                        <Image src={banner3} alt="" />
                    </div>

                    <div className="detailtext" data-aos="fade-left">
                        <h3>
                            본 과정에 대한<br />
                            간략한 자격 응시 설명입니다.
                        </h3>
                        <p>
                        시험 응시 관련한 사항 및 안내에 관한 내용이 들어가요.<br />
                        사실 이미 다 숙지가 되어있어야 해요. 다들 숙지하고 있죠???<br />
                        본 사항에 대한 미숙지는 응시자 본인에게 있습니다.
                        </p>

                        <h4>1. 응시 설명</h4>
                        <p>응시 및 내용에 대한 설명이 들어갑니다. 이미 다른 안내 페이지 등에서 안내가 되었었던 사항들이라 간단히만 기재해요.</p>
                        <h4>2. 응시 설명</h4>
                        <p>응시 및 내용에 대한 설명이 들어갑니다. 이미 다른 안내 페이지 등에서 안내가 되었었던 사항들이라 간단히만 기재해요.</p>
                        <h4>3. 응시 설명</h4>
                        <p>응시 및 내용에 대한 설명이 들어갑니다. 이미 다른 안내 페이지 등에서 안내가 되었었던 사항들이라 간단히만 기재해요.</p>
                    </div>
                </div>
            </div>

            <div className="detailinfoBtm" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000">
                <ul className="detaillist">
                    <li>
                        <i>
                            <Image src={icoCheck} alt="" />
                        </i>
                        <h4>자부심 뿜뿜 설명</h4>
                        <p>자부심 뿜뿜 시켜줄 수 있는 멘트로, 안내 및 유의사항 등등을 알려줍니다. 해당하는 내용에 맞게 좌측 상단 아이콘도 바꿀 예정이에요. 골드컬러로!</p>
                    </li>
                    <li>
                        <i>
                            <Image src={icoHuman} alt="" />
                        </i>
                        <h4>자부심 뿜뿜 설명</h4>
                        <p>자부심 뿜뿜 시켜줄 수 있는 멘트로, 안내 및 유의사항 등등을 알려줍니다. 해당하는 내용에 맞게 좌측 상단 아이콘도 바꿀 예정이에요. 골드컬러로!</p>
                    </li>
                    <li>
                        <i>
                            <Image src={icoRefresh} alt="" />
                        </i>
                        <h4>자부심 뿜뿜 설명</h4>
                        <p>자부심 뿜뿜 시켜줄 수 있는 멘트로, 안내 및 유의사항 등등을 알려줍니다. 해당하는 내용에 맞게 좌측 상단 아이콘도 바꿀 예정이에요. 골드컬러로!</p>
                    </li>
                    <li>
                        <i>
                            <Image src={icoRotate} alt="" />
                        </i>
                        <h4>자부심 뿜뿜 설명</h4>
                        <p>자부심 뿜뿜 시켜줄 수 있는 멘트로, 안내 및 유의사항 등등을 알려줍니다. 해당하는 내용에 맞게 좌측 상단 아이콘도 바꿀 예정이에요. 골드컬러로!</p>
                    </li>
                    <li>
                        <i>
                            <Image src={icoLock} alt="" />
                        </i>
                        <h4>자부심 뿜뿜 설명</h4>
                        <p>자부심 뿜뿜 시켜줄 수 있는 멘트로, 안내 및 유의사항 등등을 알려줍니다. 해당하는 내용에 맞게 좌측 상단 아이콘도 바꿀 예정이에요. 골드컬러로!</p>
                    </li>
                    <li>
                        <i>
                            <Image src={icoTrash} alt="" />
                        </i>
                        <h4>자부심 뿜뿜 설명</h4>
                        <p>자부심 뿜뿜 시켜줄 수 있는 멘트로, 안내 및 유의사항 등등을 알려줍니다. 해당하는 내용에 맞게 좌측 상단 아이콘도 바꿀 예정이에요. 골드컬러로!</p>
                    </li>
                </ul>

                <Image src={dividerbar} className="dividerbar" alt="" />

                <div className="codebox">
                    <Image src={bgBall} className="bgBall" alt="" />
                    <div className="text">
                        <h5>
                        응시할 준비가  되셨다면<br />코드를 입력해주세요
                        </h5>
                        <p>
                        해당 코드는 자격을 갖추신 분들께<br />별도로 안내되었습니다 !
                        </p>
                        <input
                            type="text"
                            placeholder="코드 입력"
                            className="inputcode"
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                        <p className="codetext">{codetext}</p>

                    </div>
                    <div className="img floating">
                        <Image src={imgLock2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default EssentialMain;