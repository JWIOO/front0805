"use client"

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import iconPhoto from '@/public/images/certificate/file.png'


type Team = '팀1' | '팀2' | '팀3';

const Writingform: React.FC = () => {
    const [name, setName] = useState('');
    const [school, setSchool] = useState('');
    const [major, setMajor] = useState('');
    const [grade, setGrade] = useState('');
    const [generation, setGeneration] = useState('');
    const [team, setTeam] = useState<Team | ''>('');
    const [part, setPart] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [agreed, setAgreed] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const gradeOptions = ['1학년', '2학년', '3학년', '4학년', '5학년', '졸예'];
    const generationOptions = Array.from({length: 10}, (_, i) => `${i + 1}기수`);
    const teamOptions: Team[] = ['팀1', '팀2', '팀3'];

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
            setImage(e.target?.result as string);
        };
        reader.readAsDataURL(file);
        }
    };

    const generateRandomImage = () => {
        const images = [
            '/images/certificate/img01.png',
            '/images/certificate/img02.png',
            '/images/certificate/img03.png',
            '/images/certificate/img04.png',
        ];
        const randomImage = images[Math.floor(Math.random() * images.length)];
        setImage(randomImage);
    };

    const handleSubmit = () => {
        if (!name || !school || !major || !grade || !generation || !team || !part || !email) {
        alert('모든 필드를 입력해주세요.');
        return;
        }
        if (image === '/images/file.png') {
        alert('시험 응시에 쓰일 이미지를 업로드 해주세요.');
        return;
        }
        if (!agreed) {
        alert('입력한 사항에 대해 이상 없음을 확인해주세요.');
        return;
        }
        setShowResult(true);
    };

    return (
        <div className="nameCardWrapper">
        {!showResult ? (
            <div className="inputBox">
            <div className="inputBox01">
                <h1>크루 인적사항 기입</h1>
                <form>
                <ul className="input_list">
                    <li>
                    <div className="box">
                        <label htmlFor="name">이름</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="ex) 홍길동" />
                    </div>
                    </li>
                    <li>
                    <div className="box">
                        <label htmlFor="school">학교</label>
                        <input type="text" id="school" value={school} onChange={(e) => setSchool(e.target.value)} placeholder="ex) 한국대" />
                    </div>
                    </li>
                    <li className="flex flex02">
                    <div className="box">
                        <label htmlFor="major">학과</label>
                        <input type="text" id="major" value={major} onChange={(e) => setMajor(e.target.value)} placeholder="ex) 경영학과" />
                    </div>
                    <div className="box sel_box">
                        <label htmlFor="grade">학년</label>
                        <select id="grade" value={grade} onChange={(e) => setGrade(e.target.value)}>
                        <option value="">학년</option>
                        {gradeOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                        </select>
                    </div>
                    </li>
                    <li className="flex flex03">
                    <div className="box sel_box">
                        <label htmlFor="generation">기수</label>
                        <select id="generation" value={generation} onChange={(e) => setGeneration(e.target.value)}>
                        <option value="">기수</option>
                        {generationOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                        </select>
                    </div>
                    <div className="box sel_box">
                        <label htmlFor="team">팀</label>
                        <select id="team" value={team} onChange={(e) => setTeam(e.target.value as Team)}>
                        <option value="">팀</option>
                        {teamOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                        </select>
                    </div>
                    <div className="box">
                        <label htmlFor="part">파트</label>
                        <input type="text" id="part" value={part} onChange={(e) => setPart(e.target.value)} placeholder="ex) 일반" />
                    </div>
                    </li>
                    <li>
                    <div className="box">
                        <label htmlFor="email">이메일</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ex) abcd1234@gmail.com" />
                    </div>
                    </li>
                </ul>
                </form>
            </div>
            <div className="inputBox02">
                <div className="image_file">
                <label htmlFor="image" onClick={() => fileInputRef.current?.click()}>
                    {
                        image == ''
                        ? (
                            <>
                                <Image src={iconPhoto} alt="preview" width={61} height={61} />
                                <b>시험 응시에 쓰일 이미지를 업로드 해주세요.</b>
                                <p>
                                    파일의 용량은 0000 입니다.<br />
                                    파일의 형식은 000입니다.
                                </p>
                            </>
                        ):(
                            <Image src={image} alt="preview" width={250} height={250} />
                        )

                    }
                </label>
                <input
                    type="file"
                    id="image"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    hidden
                />
                </div>
                <div className="image_btn">
                <button type="button" className="btn01" onClick={generateRandomImage}>랜덤 생성하기</button>
                <button type="button" className="btn02" onClick={() => fileInputRef.current?.click()}>업로드</button>
                </div>
                <div className="submitBtn">
                <input
                    type="checkbox"
                    id="chk"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    hidden
                />
                <label htmlFor="chk">
                    <span></span>
                    입력한 사항에 대해 이상 없습니다.
                </label>
                <button type="button" onClick={handleSubmit}>최종 제출하기</button>
                </div>
            </div>
            </div>
        ) : (
            <div className={`resultBox ${team.toLowerCase()}`}>
            <div className="result_img">
                <Image src={image} alt="result" width={250} height={250} />
            </div>
            <div className="resultBox_txt">
                <div className="rbt01">PHALANX <span className="generation_txt">{generation}</span></div>
                <div className="rbt02">팀 <span className="team_txt">{team}</span>/ 파트 <span className="part_txt">{part}</span></div>
                <div className="rbt03"><span className="name_txt">{name}</span>, <span className="school_txt">{school}</span> <span className="major_txt">{major}</span> <span className="grade_txt">{grade}</span></div>
                <div className="rbt04"><span className="email_txt">{email}</span></div>
            </div>
            </div>
        )}
        </div>
    );
};

export default Writingform;