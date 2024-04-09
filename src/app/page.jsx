import AudioBook from "@/components/AudioBook/AudioBook";
import Hero from "@/components/Hero/Hero";
import ProfessionalVoice from "@/components/ProfessionalVoice/ProfessionalVoice";
import Portfolio from "@/components/Portfolio/Portfolio";
import Image from "next/image";
import Works from "media/works.jpg"
import FormBg from "media/formBg.png"
import Input from "@/components/Input/Input";
import { Button } from "@/components/ui/button";
import Testimonials from "@/components/Testimonials/Testimonials";
import LetsTalk from "@/components/LetsTalk/LetsTalk";
import Footer from "@/components/Footer/Footer";

const Home = () => {
  return (
    <main>
      <Hero />
      <AudioBook />
      <section>
        <div className="py-[80px]">
          <div className="container">
            <h2 className="text-[50px] leading-tight mb-10 font-semibold">How Does it Work?</h2>
            <Image src={Works} alt="works" className="block" />
          </div>
        </div>
      </section>
      <ProfessionalVoice />
      <Portfolio />
      <section>
        <div className="relative z-10 py-[80px]">
          <Image src={FormBg} alt="FormBanner" className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-cover object-bottom" priority />
          <div className="container">
            <div className="text-center text-white">
              <h2 className="text-[50px] leading-tight font-semibold mb-2">Request A Free Quote</h2>
              <p className="text-base font-normal">If you want to publish your book on Amazon and Barnes & Noble, kindly fill out your information and get a free quote.</p>
              <form>
                <div className="flex items-center justify-center gap-x-5 mt-10 w-[95%] mx-auto">
                  <div className="basis-[25%]">
                    <Input lable={false} type="text" name="name" placeholder="Name" classes="bg-[#3C6CA3] border-none ps-5 !py-3 rounded-lg 
                 placeholder:text-white font-medium w-[100%]"/>
                  </div>
                  <div className="basis-[25%]">
                    <Input lable={false} type="email" name="email" placeholder="Email" classes="bg-[#3C6CA3] border-none ps-5 !py-3 rounded-lg 
                  placeholder:text-white font-medium w-[100%]"/>
                  </div>
                  <div className="basis-[25%]">
                    <Input lable={false} type="number" name="number" placeholder="Phone" classes="bg-[#3C6CA3] border-none ps-5 !py-3 rounded-lg 
                  placeholder:text-white font-medium w-[100%]"/>
                  </div>
                  <Button type="submit" className="shadow-xl h-11 basis-[20%]">Submit Details</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Testimonials/>
      <LetsTalk/>
      <Footer/>
    </main>
  )
}
export default Home;