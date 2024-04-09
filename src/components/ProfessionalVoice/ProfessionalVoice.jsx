import Image from "next/image";
import VoiceTale from "media/voiceTale..png"
import { Button } from "../ui/button";
const ProfessionalVoice = () => {
    return (
        <section>
            <div className="relative z-10 py-[80px] bg-[#1543a78]">
                <Image src={VoiceTale} alt="voiceTale" className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-left object-cover" priority />
                <div className="container">
                    <div className="grid grid-cols-2 gap-x-5">
                        <div></div>
                        <div className="text-white">
                            <h2 className="text-[40px] font-semibold leading-tight mb-2">Narrate your <span className="text-[#117EBC]">Audiobook</span> <br /> with a Professional Voice.</h2>
                            <p className="md:text-base text-sm font-normal mb-2">Discover the possibilities of self-publishing on Audible, the best audiobook service out there. Use smart strategies for promoting your audio books to increase your visibility. Learn about the many Audible book services and how to easily publish your book there.</p>
                            <p className="md:text-base text-sm font-normal mb-2">With the audiobook sector growing faster than e-books in recent years, our sustainable marketing techniques are specifically designed for it. The increased demand for content brought about by this rise in popularity has made it difficult for traditional publishing houses to keep up with producing more audiobooks. Explore the world of Amazon audiobooks on Audible, where you can network with seasoned voice artists for audiobooks and skilled Amazon audiobook narrator to grow your brand and succeed with audiobook marketing.</p>
                            <div className="flex items-center gap-x-5 mt-5">
                                <Button variant="secondary">LETS DISCUSS</Button>
                                <Button>866-600-0036</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfessionalVoice;