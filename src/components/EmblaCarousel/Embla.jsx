"use client"
import { DotButton, useDotButton } from './EmblaCarouselDotButtons'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'

const EmblaCarousel = ({ options, arrows, dots, progressBar, children }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)
    const [scrollProgress, setScrollProgress] = useState(0)
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi)
    const onScroll = useCallback((emblaApi) => {
        const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
        setScrollProgress(progress * 100)
    }, [])
    useEffect(() => {
        if (!emblaApi) return

        onScroll(emblaApi)
        emblaApi.on('reInit', onScroll)
        emblaApi.on('scroll', onScroll)
    }, [emblaApi, onScroll])
    return (
        <section className="container">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex [backface-visibility:hidden] [touch-action:pan-y] ml-[calc(1rem*-1)]">
                    {children}
                </div>
            </div>
            <div className="relative grid sm:grid-cols-[auto,1fr] gap-[1.2rem] mt-[1.8rem]">
                {arrows &&
                    <div className="sm:grid hidden grid-cols-2 gap-[0.6rem] items-center">
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                    </div>
                }
                {dots &&
                    <div className="flex flex-wrap sm:justify-end justify-center items-center lg:mr-[calc((2.6rem-1.4rem)/2*-1)] mr-[calc((2.6rem-2.4rem)/2*-1)]">
                        {scrollSnaps.map((_, index) => (
                            <DotButton
                                key={index}
                                onClick={() => onDotButtonClick(index)}
                                className={`touch-manipulation cursor-pointer border-0 p-0 m-0 ml-2 w-3 h-3 flex items-center justify-center rounded-full bg-[#D3D6D8] after:w-5 after:h-5 after:rounded-full after:flex after:items-center`.concat(
                                    index === selectedIndex ? ` !bg-[#24303E] w-[1rem] h-[1rem] ` : ' '
                                )}
                            />
                        ))}
                    </div>
                }
                {progressBar &&
                    <div className="md:block hidden absolute bg-[#D3D6D8] h-[0.1rem] justify-self-end self-center lg:w-[calc(100%-170px)] w-[calc(100%-200px)] max-w-[100%] overflow-hidden left-[25px] right-0 m-auto">
                        <div
                            className="absolute bg-black w-full top-0 bottom-0 -left-full"
                            style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
                        />
                    </div>
                }
            </div>
        </section >
    )
}

export default EmblaCarousel
