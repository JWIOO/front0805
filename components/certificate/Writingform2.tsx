"use client"

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import iconPhoto from '@/public/images/certificate/file.png'


type Team = '팀1' | '팀2' | '팀3';

const Writingform2: React.FC = () => {
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
    const teamOptions: Team[] = ['팀1' , '팀2' , '팀3'];

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
            <div className="inputBox02 other">
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
                {/* <button type="button" className="btn01" onClick={generateRandomImage}>랜덤 생성하기</button> */}
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
                </div>
            </div>
        </div>
    );
};

export default Writingform2;