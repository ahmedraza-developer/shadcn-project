import Image from "next/image";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import { Button } from "../ui/button";
import HeadPhones from "media/headPhones.png"
import audioPlay from "media/audioPlay.png"
import audioPause from "media/audioPause.png"
const AudioBook = () => {
    return (
        <section>
            <div className="bg-[#F8F8F8] lg:py-[80px] md:py-[60px] py-[40px]">
            <div className="container">
                <div className="lg:flex items-center justify-between">
                    <div className="xl:basis-[30%] lg:basis-[35%] basis-[100%]">
                        <div className="bg-[#16467D] py-[30px] px-[20px] rounded-xl text-white">
                            <h4 className="text-[27px] text-center font-semibold">Kick-Start My Project!</h4>
                            <form>
                                <Input
                                    lable="Full Name*"
                                    name="name"
                                    type="text"
                                    placeholder="Type Full Name"
                                />
                                <Input
                                    lable="Phone *"
                                    name="phone"
                                    type="number"
                                    placeholder="123-456-7890"
                                />
                                <Input
                                    lable="Email *"
                                    name="email"
                                    type="email"
                                    placeholder="Type Full Email"
                                />
                                <Textarea
                                    lable="Message"
                                    name="message"
                                />
                                <Button type="submit" className="w-full bg-white text-primary text-base font-medium mt-5 hover:text-white">Submit</Button>
                            </form>
                        </div>
                    </div>
                    <div className="xl:basis-[67%] lg:basis-[60%] basis-[100%] lg:mt-0 mt-10">
                        <h4 className="lg:text-[35px] md:text-[30px] text-[20px] leading-tight font-medium mb-2">Industry-Leading Team At Your Service</h4>
                        {
                            [
                                ["Meet our voice over artists at Book Writing Cube, who are ready to deliver excellent results that will leave listeners returning for more."],
                                ["We blast your audio books online to new heights."],
                                ["With expertise in audible publishing, audiobook production, and audio book promotion, we’re here to turn your manuscript into a melodic experience."],
                                ["Whether you’re aiming for Amazon audio books or want to self-publish on audible, our dedicated team will be your guiding voice."]
                            ].map(([desc], i) => (
                                <p key={i} className="mb-2 md:text-base text-sm font-normal">{desc}</p>
                            ))
                        }
                        <h2 className="xl:text-[50px] lg:text-[40px] md:text-[30px] text-[25px] font-semibold leading-tight mb-2">BWC Create <span className="text-[#196DAB]">Bestselling</span> <br className="lg:block hidden" /> Audiobooks for You.</h2>
                        {
                            [
                                ["We don’t just create an audiobook; we offer the best audiobook services and experiences for you."],
                                ["With our professional voice actors and the latest sound editing software, experience the convenience of the best audiobook service tailored to your preferences."],
                                ["Book Writing Cube lets you experience the world of Amazon Audible books and discover endless book publishing options."],
                                ["From writing, editing, to publishing and audiobook marketing services, we ensure your book hits every shelf out there."],
                                ["Whether you want the satisfaction of a paperback, the appeal of a hardcover, or want your audible narration on a digital shelf like Kindle, our team of top-tier audiobook narrators and seasoned publishers has your back"]
                            ].map(([desc], i) => (
                                <p key={i} className="mb-2 md:text-base text-sm font-normal">{desc}</p>
                            ))
                        }
                        <div className="border-t-2 border-b-2 border-[#B5B5B5] mt-4">
                            <div className="flex items-center gap-x-5 my-4">
                                <Image src={HeadPhones} alt="headphones" className="block" />
                                <h4 className="md:text-[25px] text-[20px] leading-tight font-semibold">Listen To Sample Audiobooks:</h4>
                            </div>
                            {
                                [
                                    ["Let’s face it: who has time to read books these days? So why not avail the option of books on-the-go? At Book Writing Cube, we allow you to reach a broader audience with our best audiobook production services through Amazon audio book publishing and Audible book publishing."],
                                    ["Make the most of our audible book services created to bring your storytelling to life."]
                                ].map(([desc], i) => (
                                    <p key={i} className="mb-2 md:text-base text-sm font-normal">{desc}</p>
                                ))
                            }
                        </div>
                        <div className="flex items-center gap-x-5 mt-5">
                            <Image src={audioPlay} alt="audioPlay" className="block" />
                            <Image src={audioPause} alt="audioPause" className="block" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default AudioBook;