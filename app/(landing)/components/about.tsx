'use client'
import Feature from './feature'
import { useState } from 'react'
import { motion, AnimatePresence, MotionConfig } from "framer-motion";



import tutorial from '@/public/mockups/Tutorial.png'
import home from '@/public/mockups/Home.png'
import info from '@/public/mockups/Info.png'

const feature1 = {
    src: tutorial,
    alt: "Tutorial Screenshot",
    point1: { title: "Upload", description: "chord sheets and create tutorials for any instrument" },
    point2: { title: "Learn", description: "tips and techniques from experienced musicians" },
    point3: { title: "Practice", description: "with high quality chordsheets - never play a wrong chord again" },

}

const feature2 = {
    src: home,
    alt: "Home Screenshot",
    point1: { title: "Discover", description: "new music" },
    point2: { title: "Find", description: "inspiration" },
    point3: { title: "Support", description: "up and coming artists" },

}

const feature3 = {
    src: info,
    alt: "Team Screenshot",
    point1: { title: "Organize", description: "your set lists" },
    point2: { title: "Schedule", description: "gigs and practice sessions" },
    point3: { title: "Communicate", description: "with your band in one place" },

}
let tabs = [
    {
        label: "Learn",
        elem: <Feature {...feature1} />
    },
    { label: "Discover", elem: <Feature {...feature2} /> },
    { label: "Play", elem: <Feature {...feature3} /> }]

export default function About({ nonce }: {readonly nonce: string }) {
    let [activeTab, setActiveTab] = useState(tabs[0])
    
    return (
        <div className="overflow-hiddenscroll-mt-10 w-full m-10 pt-14" id="about">
            <MotionConfig nonce={nonce}>
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={activeTab ? activeTab.label : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {activeTab ? activeTab.elem : ""}
                    </motion.div>
                </AnimatePresence>
                <div className="flex space-x-1 justify-center mt-5">
                    {tabs.map((tab) => (
                        <button
                            key={tab.label}
                            onClick={() => setActiveTab(tab)}
                            className={`${activeTab === tab ? "text-mine-950 dark:text-mine-50" : "hover:text-mine-500 dark:hover:text-mine-200 text-mine-700 dark:text-mine-300"
                                } relative rounded-full px-3 py-2 text-sm md:text-base font-medium transition focus-visible:outline-2`}
                        >
                            {activeTab === tab && (
                                <motion.span
                                    layoutId="bubble"
                                    className="absolute inset-0 z-10 bg-mine-50 dark:bg-mine-50 mix-blend-difference rounded-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {tab.label}
                        </button>
                    ))}
                </div>
            </MotionConfig>

        </div >
    )
}