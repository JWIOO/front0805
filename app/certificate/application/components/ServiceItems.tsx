"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { serviceItemsData } from "@/app/certificate/application/data/service";

const ServiceItems = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="section pb-0 s-main fade-wrapper">
            <div className="container">
                <div className="row gaper">
                    {serviceItemsData.map((item, index) => (
                        <div
                            className="col-12 col-md-6 col-xl-4"
                            key={item.id}
                            data-aos="fade-up"
                            data-aos-delay={(index + 0.5) * 500} // 초기 지연 시간 250ms 추가
                        >
                            <div className="s-main__single">
                                <div className="cardbox">
                                    <div className="thumb">
                                        <Link href={`/certificate?type=${item.type}`}>
                                            <Image src={item.productImg} alt="Image" priority />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <Link
                                            href={`/certificate?type=${item.type}`}
                                            className="primary-text btn btn--secondary"
                                        >
                                            {item.name}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceItems;
