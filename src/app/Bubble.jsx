'use client'
import React from "react";
import {motion, AnimatePresence} from "framer-motion"

import { useRouter } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faGamepad, faNoteSticky } from "@fortawesome/free-solid-svg-icons";

import '@/app/bubble.css'

export default function BubbleIcons () {
    const style = {
        width: "200px",
        borderRadius: "10px",
        justifyContent: "space-between",
    }

    const router = useRouter()

    const [toggleBubbleBar, setToggleBubbleBar ] = React.useState(false)
    function openBubbleBar () {
      setToggleBubbleBar(prev=>!prev)
    }

    return (
        <AnimatePresence>
            <motion.div 
                className="bubble" 
                style={toggleBubbleBar ? style:{}}
                initial={window.innerWidth < 530 ? {
                    top:0,
                    left:0
                }:{
                    top:50,
                    left:50
                }}
                drag
                dragMomentum={false}
                dragConstraints={{
                    top:0,
                    left:0,
                    bottom: window.innerWidth < 530 ?  window.innerHeight-50 : window.innerHeight-150,
                    right: window.innerWidth < 530 ? window.innerWidth-50 : window.innerWidth-150
                }}
                >
                    <FontAwesomeIcon icon={faBars} className="bubble--bar" onClick={openBubbleBar}></FontAwesomeIcon>
                    <div className='onHover' style={toggleBubbleBar ? {display: "flex"}:{}}>
                        <Link href="/">
                            <FontAwesomeIcon icon={faHome} className='nav-icons'></FontAwesomeIcon>
                        </Link>
                        <Link href="/Games">
                            <FontAwesomeIcon icon={faGamepad} className='nav-icons'></FontAwesomeIcon>
                        </Link>
                        <Link href="/NotesApp">
                            <FontAwesomeIcon icon={faNoteSticky} className='nav-icons'></FontAwesomeIcon>
                        </Link>
                    </div>
            </motion.div>
        </AnimatePresence>
    )
}