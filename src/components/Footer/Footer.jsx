"use client"
// Next
import Image from "next/image"
import Link from "next/link"
// Components
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import Logo from "media/logo.png"
import Mail from "media/mailWhite.png"
import Call from "media/callWhite.png"
import Location from "media/location.png"
import award1 from "media/permium-services.png"
import award2 from "media/hugo-award.png"
import award3 from "media/award-for-services.png"
import award4 from "media/best-inovative.png"
import award5 from "media/content-deginer.png"
import award6 from "media/literary-award.png"
import award7 from "media/dan-poynter.png"
import award8 from "media/digital-agency.png"
import BBC from "media/bbb.png"
import clutch from "media/clutch.png"
import sitejabbar from "media/sitejabbar.png"
import yelp from "media/yelp.png"
import google from "media/googleWhite.png"
import Payment from "media/payment.png"
import fb from "media/fb.png"
import insta from "media/insta.png"
import ln from "media/ln.png"
import twit from "media/twit.png"
import yte from "media/yte.png"
import dmca from "media/dmca.png"
import EmblaCarousel from "../EmblaCarousel/Embla"
const Footer = () => {
    return (
        <footer>
            <div className="bg-[#16467D] py-[80px]">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="basis-[30%]">
                            <NavigationMenu>
                                <NavigationMenuItem>
                                    <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} mb-12`}>
                                            <Image src={Logo} alt="logo" className="block" />
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenu>
                            {[
                                ['info@bookwritingcube.com', '/', Mail],
                                ['Toll Free:  866-600-0036 ', '/', Call],
                                ['For Sales Inquiry: (302) 459-5127 ', '/', Call],
                                ['For Project Inquiry: (302) 480-9990 ', '/', Call],
                                ['Head Office: 4145 S.W. Watson, Suite 350, Beaverton, Oregon 97005 , United States', '/', Location],
                                ['Operation: 8 The Green STE 300, Dover DE 19901', '/', Location],
                            ].map(([title, url, icon], i) => (
                                <NavigationMenu key={i}>
                                    <NavigationMenuItem>
                                        <Link href={url} legacyBehavior passHref>
                                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} !text-sm w-[100%]`}>
                                                <Image src={icon} alt="icons" width={24} height={24} className="inline-block me-2 py-2" />
                                                {title}
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                </NavigationMenu>
                            ))}
                        </div>
                        <div className="basis-[20%]">
                            <h4 className="text-white text-[20px] leading-tight font-medium underline mb-3">QUICK LINKS</h4>
                            {[
                                ['Home', '/'],
                                ['Pricing', '/'],
                                ['Contact', '/'],
                                ['Let Get Started', '/'],
                            ].map(([title, url], i) => (
                                <NavigationMenu key={i}>
                                    <NavigationMenuItem>
                                        <Link href={url} legacyBehavior passHref>
                                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} !text-sm w-[100%]`}>
                                                {title}
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                </NavigationMenu>
                            ))}
                            <div className="flex items-center gap-x-5 mb-10">
                            {[
                                [fb, '/'],
                                [insta, '/'],
                                [ln, '/'],
                                [twit, '/'],
                                [yte, '/'],
                            ].map(([icons, url], i) => (
                                <NavigationMenu key={i}>
                                    <NavigationMenuItem>
                                        <Link href={url} target="_blank" legacyBehavior passHref>
                                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} !text-sm w-[100%]`}>
                                                <Image src={icons} alt="smmIcons" className="block"/>
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                </NavigationMenu>
                            ))}
                            </div>
                            <Image src={dmca} alt="dmca" className="block"/>
                        </div>
                        <div className="basis-[20%]">
                            {[
                                ['Book Writing', '/'],
                                ['Book Editing', '/'],
                                [' Book Publishing', '/'],
                                ['Ebook Writing', '/'],
                                ['Book Marketing', '/'],
                                ['Digital Marketing', '/'],
                                ['Announcement', '/'],
                            ].map(([title, url], i) => (
                                <NavigationMenu key={i}>
                                    <NavigationMenuItem>
                                        <Link href={url} legacyBehavior passHref>
                                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} !text-sm w-[100%]`}>
                                                {title}
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                </NavigationMenu>
                            ))}
                        </div>
                        <div className="basis-[15%]">
                            <Image src={BBC} alt="bbc" className="block mx-auto" />
                            <h4 className="text-white text-center text-[20px] leading-tight font-medium underline my-3">Awards</h4>
                            <EmblaCarousel
                                options={{ slidesToScroll: 'auto', loop: true }}
                                dots={false}
                                arrows={false}
                                progressBar={false}
                            >
                                {
                                    [
                                        [award1],
                                        [award2],
                                        [award3],
                                        [award4],
                                        [award5],
                                        [award6],
                                        [award7],
                                        [award8],
                                    ].map(([img], i) => (
                                        <div key={i} className="flex-[0_0_calc(100%/1)] pt-[20px] pb-[0px]">
                                            <div className="flex flex-col items-center justify-center">
                                                {img && <Image src={img} alt="awards" className="block" />}
                                            </div>
                                        </div>
                                    ))
                                }
                            </EmblaCarousel>
                        </div>
                        <div className="basis-[15%]">
                            <EmblaCarousel
                                options={{ slidesToScroll: 'auto', loop: true }}
                                dots={false}
                                arrows={false}
                                progressBar={false}
                            >
                                {
                                    [
                                        [clutch],
                                        [sitejabbar],
                                        [yelp],
                                        [google],
                                    ].map(([img], i) => (
                                        <div key={i} className="flex-[0_0_calc(100%/1)] pt-[0px] pb-[60px]">
                                            <div className="flex flex-col items-center justify-center">
                                                {img && <Image src={img} alt="icons" className="block" />}
                                            </div>
                                        </div>
                                    ))
                                }
                            </EmblaCarousel>
                            <Image src={Payment} alt="payment" className="block" />
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer;