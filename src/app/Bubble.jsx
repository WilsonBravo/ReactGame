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

    const [windowWidth, setWindowWidth] = React.useState(0);
    const [windowHeight, setWindowHeight] = React.useState(0);

    React.useEffect(() => {
        // Verificar si estamos en el lado del cliente antes de acceder a window
        if (typeof window !== "undefined") {
          setWindowWidth(window.innerWidth);
          setWindowHeight(window.innerHeight);
    
          // También puedes suscribirte a eventos de redimensionamiento si necesitas actualizar el estado cuando cambie el tamaño de la ventana.
          const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
          };
    
          window.addEventListener("resize", handleResize);
    
          // Limpia el evento al desmontar el componente
          return () => {
            window.removeEventListener("resize", handleResize);
          };
        }
      }, []);

    return (
        <AnimatePresence>
            <motion.div 
                className="bubble" 
                style={toggleBubbleBar ? style:{}}
                initial={windowWidth < 530 ? {
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
                    bottom: windowWidth < 530 ?  windowHeight-50 : windowHeight-150,
                    right: windowWidth < 530 ? windowWidth-50 : windowWidth-150
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