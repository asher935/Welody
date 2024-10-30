'use client'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { motion } from "framer-motion";

const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}

const item = {
    visible: {
        opacity: 1, x: 0, filter: "blur(0px)", transition: {
            when: "beforeChildren",
            staggerChildren: 0.01,
            ease: "easeIn"
        },
    },
    hidden: {
        opacity: 0, x: -100, filter: "blur(20px)", transition: {
            when: "afterChildren",
        },
    },

}

export default function Hero() {
    return (
        <section className="w-full" id="hero">
            <motion.div initial="hidden" animate="visible" variants={list}>
                <motion.div className="max-w-screen-sm w-full mx-auto justify-center text-center">
                    <motion.h1 variants={item} className="font-semibold text-7xl mt-24">
                        Music is better together.
                    </motion.h1>
                    <motion.p variants={item} className='font-light text-xl mt-5 w-full text-balance'>
                        Share your passion, discover new songs, collaborate with fellow musicians.
                    </motion.p>
                </motion.div>
                <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center mx-auto mt-10 gap-4">
                    <motion.button variants={item} type="button" className="items-center px-4 py-2 rounded-full bg-mine-950 text-mine-50 dark:bg-mine-700 dark:text-mine-50 hover:dark:bg-mine-600 shadow-lg hover:shadow-none drop-shadow-lg hover:drop-shadow-none z-30 hover:z-20 transition-colors">Sign up for free</motion.button>
                    <motion.a variants={item} href="#pricing" type="button" className="inline-flex justify-center whitespace-nowrap border border-mine-500 items-center px-4 py-2 rounded-full text-mine-950 dark:text-mine-50 group">View plans
                        <ArrowRightIcon className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 w-5" />
                    </motion.a>
                </motion.div>
            </motion.div>
        </section >
    )

}