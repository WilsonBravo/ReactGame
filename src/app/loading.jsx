'use client'
import { motion, AnimatePresence } from "framer-motion"
import Footer from "@/components/Footer"

export default function () {
    return (
        <AnimatePresence>
            <div className="load">
                <main className="load--container">
                    <motion.img 
                        src="/miku_green.png" 
                        alt="Logo" 
                        width="70px" 
                        animate={{
                            rotate:[0,360],
                            transition:{
                                repeat:Infinity,
                                duration:1
                            }
                        }}
                        />
                    <div className="load--description--content">
                        <span className="load--description">Getting everything ready</span>
                        <motion.span
                            className="load--dot"
                            animate={{
                                y:[0, -5, 0],                            
                            }}
                            transition={{
                                repeat:Infinity,
                                duration:1,
                                ease: "easeInOut"
                            }}
                            >.</motion.span>
                        <motion.span
                            className="load--dot"
                            animate={{
                                y:[0, -5, 0]
                            }}
                            transition={{
                                repeat:Infinity,
                                duration:1,
                                ease: "easeInOut",
                                delay:0.3
                            }}
                            >.</motion.span>
                        <motion.span
                            className="load--dot"
                            animate={{
                                y:[0, -5, 0]
                            }}
                            transition={{
                                repeat:Infinity,
                                duration:1,
                                ease: "easeInOut",
                                delay:0.7
                            }}
                            >.</motion.span>
                    </div>
                </main>
                <Footer/>
            </div>
        </AnimatePresence>
    )
}