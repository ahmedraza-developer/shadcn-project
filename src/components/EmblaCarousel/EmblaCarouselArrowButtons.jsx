"use client"
import React, { useCallback, useEffect, useState } from 'react'
/* For Customized CSS */
import styles from "./embla.module.css"
/* For Customized CSS */
import Image from 'next/image'
import LeftArrow from "media/leftArrow.png"
import RightArrow from "media/rightArrow.png"
export const usePrevNextButtons = (emblaApi) => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
    }, [emblaApi])

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
    }, [emblaApi])

    const onSelect = useCallback((emblaApi) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    }
}
export const PrevButton = (props) => {
    const { children, icon, ...restProps } = props
    return (
        <button
            className="touch-manipulation cursor-pointer border-none p-0 m-0 w-[2.5rem] h-0 z-10 rounded-[50%] flex items-center justify-center disabled:opacity-50 ${styles.embla__button_prev}"
            type="button"
            {...restProps}
        >
            {icon ?
                <svg className="w-[35%] h-[35%]" viewBox="0 0 532 532">
                    <path
                        fill="currentColor"
                        d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
                    />
                </svg>
                :
                <Image
                    src={LeftArrow}
                    alt='rightarrow'
                    className='block' />
            }

            {children}
        </button>
    )
}

export const NextButton = (props) => {
    const { children, icon, ...restProps } = props

    return (
        <button
            className="touch-manipulation cursor-pointer border-none p-0 m-0 w-[2.5rem] h-0 z-10 rounded-[50%] flex items-center justify-center disabled:opacity-50"
            type="button"
            {...restProps}
        >
            {icon ?
                <svg className="w-[35%] h-[35%]" viewBox="0 0 532 532">
                    <path
                        fill="currentColor"
                        d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                    />
                </svg>
                :
                <Image
                    src={RightArrow}
                    alt='rightarrow'
                    className='block' />
            }
            {children}
        </button>
    )
}