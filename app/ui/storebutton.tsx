'use client'
import React from 'react'
import { motion, MotionConfig } from 'motion/react'
import { cinzel } from './fonts'
import { useQueryState } from 'nuqs'
import { searchParams, useFilters } from '../lib/searchParams'

export default function Button({ text, imageUrl }: { text: string, imageUrl: string }) {
    const [, setCategory ] = useQueryState('category', 
        searchParams.category.withOptions({
            shallow: false
    }))
    const [, setFilters]= useFilters()
    
    const transition = {
        type: "spring",
        duration: 0.7,
        bounce: 0.2
    }
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <button onClick={() => {
            scrollToSection('storeContent')
            setCategory(text==='lenses' ? 'len' : null)
            setFilters(null)
        }} className={`transition hover:scale-[1.03] delay-50 duration-500 ease-in-out bg-[url(/${imageUrl})] hover:grayscale-0 grayscale bg-opacity-80 bg-cover bg-center bg-no-repeat border-1 border-foreground flex items-center justify-center`}>
            <MotionConfig transition={transition}>
                <motion.div
                    className={`${cinzel.className} flex items-center justify-center text-[4rem] w-[50%] h-[50%]`}
                    whileHover={{
                        scale: 1.5,
                    }}>
                    <motion.p
                        whileHover={{
                            scale: 1.2,
                        }}
                    >{text}</motion.p>

                </motion.div>
            </MotionConfig>
        </button >
    )
}
