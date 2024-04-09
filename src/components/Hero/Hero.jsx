"use client"
import Image from "next/image";
import { Button } from "../ui/button";
import heroBG from "media/banner.png"
import Award from "media/awards.png"
import BookHero from "media/hero.png"
const Hero = () => {
    return (
        <section>
            <div className="relative z-10 2xl:pt-[200px] pt-[160px] xl:pb-0 lg:pb-[100px] md:pb-[80px] sm:pb-[60px] xs:pb-[40px]">
            <Image src={heroBG} alt="heroBG" className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-cover object-bottom" priority />
            <div className="container">
                <div className="grid md:grid-cols-2 items-start grid-cols-1 md:gap-x-5 gap-8">
                    <div className="text-white">
                        <span className="block xl:text-[30px] md:text-2xl text-base leading-normal font-normal md:mb-2 mb-2">Let Us Narrate Your Story</span>
                        <h2 className="xl:text-[65px] lg:text-[55px] md:text-[45px] text-[30px] leading-tight font-semibold">Audio Book</h2>
                        <h1 className="2xl:text-[100px] xl:text-[90px] lg:text-[80px] md:text-[75px] text-[45px] leading-tight font-semibold md:mb-0 mb-2">Narration</h1>
                        <p className="md:text-base text-xs font-medium leading-normal">Want to be the star of your own audio book? Guess what? With Book Writing Cube, now you can! We specialize in audible narration, transforming any written manuscript into a captivating audiobook that will make waves. So, why wait? Let’s bring your story to life through the power of Audible publishing!</p>
                        <div className="flex items-center gap-x-5 my-6">
                            <a href="/"><Button variant="secondary">LETS DISCUSS</Button></a>
                            <a href="/"><Button>866-600-0036</Button></a>
                        </div>
                        <div className="mt-10"><Image src={Award} alt="icons" className="brightness-0 invert" /></div>
                    </div>
                    <div>
                        <Image src={BookHero} alt="hero" width={550} height={550} className="block mx-auto" />
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Hero;