"use client"
import { useEffect } from 'react'
import Image from "next/image";
import Book1 from "media/book1.png"
import Book2 from "media/book2.png"
import Book3 from "media/book3.png"
import Book4 from "media/book4.png"
import arrowRight from "media/arrow-right-blue.png"
import EmblaCarousel from '../EmblaCarousel/Embla';
const Portfolio = () => {
    return (
        <div className="py-[80px]">
            <div className="container">
                <h2 className="text-[50px] leading-tight font-semibold">Take a Look at Our Portfolio!</h2>
                <EmblaCarousel
                    options={{ slidesToScroll: 'auto', loop: false }}
                    dots={true}
                    arrows={true}
                    progressBar={true}
                >
                    {
                        [
                            [Book1, "Visit On Amazon"],
                            [Book2, "Visit On Amazon"],
                            [Book3, "Visit On Amazon"],
                            [Book4, "Visit On Amazon"],
                            [Book1, "Visit On Amazon"],
                            [Book2, "Visit On Amazon"],
                            [Book3, "Visit On Amazon"],
                            [Book4, "Visit On Amazon"],
                            [Book1, "Visit On Amazon"],
                            [Book2, "Visit On Amazon"],
                            [Book3, "Visit On Amazon"],
                            [Book4, "Visit On Amazon"],
                        ].map(([img, text], i) => (
                            <div key={i} className="lg:flex-[0_0_calc(100%/4)] md:flex-[0_0_calc(100%/3)] sm:flex-[0_0_calc(100%/2)] flex-[0_0_calc(100%/1)] pl-[2rem] pt-[50px] pb-[25px]">
                                <div className="rounded-full text-6xl font-semibold flex flex-col items-center justify-center">
                                    {img && <Image src={img} alt="book" className="block" />}
                                    {text && <a href="/" className="w-full text-center relative inline-block transition-all duration-500 ease-in-out group text-black font-medium text-base">{text}
                                        <Image src={arrowRight} alt="Arrows" className="inline-block ms-2" /></a>}
                                </div>
                            </div>
                        ))
                    }
                </EmblaCarousel>
            </div>
        </div>
    )
}

export default Portfolio;