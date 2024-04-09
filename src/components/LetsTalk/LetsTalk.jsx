import Image from "next/image";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import letsTalk from "media/letsTalk.png"
import facebook from "media/facebook.png"
import Xtwitter from "media/x-twitter.png"
import instagram from "media/instagram.png"
import youtube from "media/youtube.png"
import linkedin from "media/linkedin.png"
import call from "media/call.png"
import email from "media/email.png"
import { Button } from "../ui/button";

const LetsTalk = () => {
    return (
        <div className="pb-[80px]">
            <div className="container">
                <div className="grid grid-cols-2 items-center gap-x-4">
                    <div className="bg-[#F3F3F3] px-10 2xl:py-[90px] py-[65px] rounded-lg">
                        <div className="mb-4">
                            <h2 className="text-[50px] leading-tight font-semibold">Lets Talk</h2>
                            <p className="text-sm leading-normal font-normal">For Inquiries, Collaboration Opportunities, Or Any Assistance, Dont Hesitate To Contact Us. Our Dedicated Team Is Ready To Engage And Support Your Needs, Ensuring A Seamless And Productive Partnership.</p>
                        </div>
                        <form>
                            <div className="flex items-center gap-x-8 justify-between mb-6">
                                <div className="basis-[50%]">
                                    <Input lable={false} type="text" name="name" placeholder="Full Name*" classes="bg-transparent border-[#B4B7BC] !py-3 placeholder:text-[#B4B7BC] font-medium w-[100%]" />
                                </div>
                                <div className="basis-[50%]">
                                    <Input lable={false} type="number" name="phone" placeholder="Phone Number*" classes="bg-transparent border-[#B4B7BC] !py-3 placeholder:text-[#B4B7BC] font-medium w-[100%]" />
                                </div>
                            </div>
                            <div className="flex items-center gap-x-8 justify-between">
                                <div className="basis-[50%]">
                                    <Input lable={false} type="email" name="email" placeholder="Email*" classes="bg-transparent border-[#B4B7BC] !py-3 placeholder:text-[#B4B7BC] font-medium w-[100%]" />
                                </div>
                                <div className="basis-[50%]">
                                    <Textarea lable={false} type="text" name="name" placeholder="Details" classes="bg-transparent border-[#B4B7BC] !pt-3 !pb-0 placeholder:text-[#B4B7BC] font-medium w-[100%]" />
                                </div>
                            </div>
                            <Button type="submit" className="!px-14 py-5 mt-8">Send Message</Button>
                        </form>
                    </div>
                    <div className="relative">
                        <Image src={letsTalk} alt="letsTalk" className="block" />
                        <div className="absolute 2xl:w-[85%] w-[95%] mx-auto flex items-center justify-between text-white translate-y-[-50px] 2xl:translate-x-6 translate-x-4">
                            <h4 className="text-[25px] leading-tight font-semibold">Social Links</h4>
                            <div className="flex items-center gap-x-5">
                                <a href="/" target="_blank">
                                    <Image src={facebook} alt="facebook" className="block" />
                                </a>
                                <a href="/" target="_blank">
                                    <Image src={Xtwitter} alt="Xtwitter" className="block" />
                                </a>
                                <a href="/" target="_blank">
                                    <Image src={instagram} alt="instagram" className="block" />
                                </a>
                                <a href="/" target="_blank">
                                    <Image src={youtube} alt="youtube" className="block" />
                                </a>
                                <a href="/" target="_blank">
                                    <Image src={linkedin} alt="linkedin" className="block" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#16467D] text-white flex items-center justify-between px-14 py-4 rounded-xl mt-4">
                    <h4 className="text-[30px] font-bold">Email Us</h4>
                    <div className="">
                        <h5 className="text-[20px] leading-tight font-semibold mb-1">For Project Inquiries Only:</h5>
                        <a href="/" className="text-sm"><Image src={email} alt="email" className="inline-block me-2" />Info@Bookwritingcube.Com</a>
                    </div>
                    <div className="">
                        <h5 className="text-[20px] leading-tight font-semibold mb-1">For Other Inquiries Only:</h5>
                        <a href="/" className="text-sm"><Image src={call} alt="call" className="inline-block me-2" />866-600-0036</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LetsTalk;