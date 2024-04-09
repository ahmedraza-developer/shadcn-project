import Image from "next/image";
import EmblaCarousel from "../EmblaCarousel/Embla";
import testi from "media/testi.png"
import playIcon from "media/play.png"
import stars from "media/stars.png"
const Testimonials = () => {
    return (
        <div className="py-[80px]">
            <div className="container">
                <div className="text-black 2xl:w-[90%] xl:w-[95%] mx-auto">
                    <h2 className="2xl:text-[46px] text-[40px] leading-tight font-semibold mb-2">Authors Testimonials for Amazon Publishing Company</h2>
                    <p className="text-base font-normal">These testimonials reflect the diverse and positive experiences of authors who have collaborated with Amazon Publishing Company, <br className="2xl:hidden xl:block hidden" /> showcasing the companys <br className="2xl:block hidden" /> commitment to excellence.</p>
                </div>
                <EmblaCarousel
                    options={{ slidesToScroll: 'auto', loop: false }}
                    dots={true}
                    arrows={true}
                    progressBar={true}
                >
                    {
                        [
                            [testi, "Jackson Tucker", `Publishers Representative, <br/> Macmillan Learning`],
                            [testi, "Jackson Tucker", `Publishers Representative, <br/> Macmillan Learning`],
                            [testi, "Jackson Tucker", `Publishers Representative, <br/> Macmillan Learning`],
                            [testi, "Jackson Tucker", `Publishers Representative, <br/> Macmillan Learning`],
                            [testi, "Jackson Tucker", `Publishers Representative, <br/> Macmillan Learning`],
                            [testi, "Jackson Tucker", `Publishers Representative, <br/> Macmillan Learning`],
                            [testi, "Jackson Tucker", `Publishers Representative, <br/> Macmillan Learning`],
                            [testi, "Jackson Tucker", `Publishers Representative, <br/> Macmillan Learning`],
                            [testi, "Jackson Tucker", `Publishers Representative, <br/> Macmillan Learning`],
                        ].map(([img, title, desc], i) => (
                            <div key={i} className="xl:flex-[0_0_calc(100%/3)] lg:flex-[0_0_calc(100%/3)] sm:flex-[0_0_calc(100%/2)] flex-[0_0_calc(100%/1)] pl-[2rem] pt-[50px] pb-[25px]">
                                <div className="relative overflow-hidden">
                                    {img && <Image src={img} alt="book" className="block" width={500} height={630} />}
                                    <div className="absolute translate-y-[-210px] translate-x-8">
                                        <a href="/" className="w-full relative block transition-all duration-500 ease-in-out group text-black font-medium text-base">
                                            <Image src={playIcon} alt="playIcon" className="block pb-3" /></a>
                                        <Image src={stars} alt="stars" className="block pb-3" />
                                        <h4 className="text-white text-[28px] leading-tight font-bold">{title}</h4>
                                        <p className="text-white text-base leading-normal font-normal" dangerouslySetInnerHTML={{ __html: desc }} />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </EmblaCarousel>
            </div>
        </div>
    )
}

export default Testimonials;