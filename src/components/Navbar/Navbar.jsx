"use client"
// Next
import Image from "next/image"
import Link from "next/link"
// Components
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
// Media
import Logo from "media/logo.png"
import Toggler from "media/toggler.svg"
import Cross from "media/cross.svg"
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className="absolute z-50 py-10 lg:h-auto h-full w-full">
            <div className="container">
                <navbar className="flex justify-between items-center">
                    <div className="">
                        <NavigationMenu>
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        <Image src={Logo} alt="logo" />
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenu>
                    </div>
                    <button className="lg:hidden bg-[#245388] rounded-full p-2 block pointer" onClick={() => setOpen((prev) => !prev)}>
                        <Image src={Toggler} alt="Menu" width={30} height={30} className={`${!open ? "block" : "hidden"}`} />
                        <Image src={Cross} alt="Menu" width={30} height={30} className={`${!open ? "hidden" : "block"}`} />
                    </button>
                    <nav className={`${!open ? "translate-x-[-100%]" : "translate-x-0"} lg:translate-x-0 lg:justify-end lg:flex w-[300px] lg:w-full h-full  duration-500 ease-in-out transition-all lg:relative absolute left-0 right-0 top-0 bottom-0 lg:items-center 2xl:gap-x-6 xl:gap-x-4 gap-x-2 lg:bg-transparent bg-[#f1f1f1] lg:px-0 lg:py-0 px-5 py-5`}>
                        {[
                            ['Home', '/'],
                            ['About Us', '/'],
                        ].map(([title, url], i) => (
                            <NavigationMenu key={i}>
                                <NavigationMenuItem>
                                    <Link href={url} legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            {title}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenu>
                        ))}
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="relative md:flex md:py-8 py-4 md:px-4 px-2 z-30 md:h-auto h-[300px] md:overflow-auto overflow-y-scroll text-sm font-bold bg-[#16467d] text-white">
                                            <div className="md:border-r-2 border-white px-4">
                                                {[
                                                    ['Book Publishing', '/'],
                                                    ['Book Promotion', '/'],
                                                    ['Book Writing', '/'],
                                                    ['Book Editing', '/'],
                                                    ['Book Marketing', '/'],
                                                    ['Proofreading Services', '/'],
                                                    ['Ghostwriting', '/'],
                                                ].map(([title, url], i) => (
                                                    <NavigationMenuLink key={i} className="block w-max py-1 hover:text-[#007bff]"><Link href={url}>{title}</Link></NavigationMenuLink>
                                                ))}
                                            </div>
                                            <div className="md:border-r-2 border-white px-4">
                                                {[
                                                    ['Article Writing', '/'],
                                                    ['Blog Writing', '/'],
                                                    ['Book Cover Design', '/'],
                                                    ['Book Trailer', '/'],
                                                    ['Business Plan Writing', '/'],
                                                    ['Children Book Publication', '/'],
                                                    ['Author Marketing', '/'],
                                                ].map(([title, url], i) => (
                                                    <NavigationMenuLink key={i} className="block w-max py-1 hover:text-[#007bff]"><Link href={url}>{title}</Link></NavigationMenuLink>
                                                ))}
                                            </div>
                                            <div className=" ps-4">
                                                {[
                                                    ["Children's Book Illustrations", '/'],
                                                    ['Digital Marketing', '/'],
                                                    ['Ebook Writing', '/'],
                                                    ['Formatting Services', '/'],
                                                    ['Audio Book Recording', '/'],
                                                    ['Web Content Writing', '/'],
                                                    ['Author Website Design', '/'],
                                                ].map(([title, url], i) => (
                                                    <NavigationMenuLink key={i} className="block w-max py-1 hover:text-[#007bff]"><Link href={url}>{title}</Link></NavigationMenuLink>
                                                ))}
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        {[
                            ['Pricing', '/'],
                            ['About Us', '/'],
                            ['Faqs', '/'],
                            ['Blogs', '/'],
                            ['Contact Us', '/'],
                        ].map(([title, url], i) => (
                            <NavigationMenu key={i}>
                                <NavigationMenuItem>
                                    <Link href={url} legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            {title}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenu>
                        ))}
                        <div className="flex items-center lg:mt-0 mt-5 md:gap-x-5 gap-x-3">
                            <NavigationMenu>
                                <NavigationMenuItem>
                                    <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            <Button variant="secondary" className="lg:mt-0 md:w-max !w-full">LETS DISCUSS</Button>
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenu>
                            <NavigationMenu>
                                <NavigationMenuItem>
                                    <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            <Button className="lg:mt-0 md:w-max !w-full">866-600-0036</Button>
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenu>
                        </div>
                    </nav>
                </navbar>
            </div>
        </header>
    )
}

export default Navbar;