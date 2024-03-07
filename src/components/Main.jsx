import Image from "next/image"
import { motion } from "framer-motion"
import ProyectCard from "@/components/partials/ProyectCard"

import proyects from "@/app/proyects"

export default function Main (props) {

    const proyectsElement = proyects.map((proyect) => <ProyectCard
        key={proyect.id}
        item={proyect}
    />)
    return(
        <main className="home--main">
            <section className="home--section">
                <Image className="main--photo" src="/Photo.jpeg" width={300} height={238} alt="Photo" />
                <article className="main--text">
                    <h1>Hello I am Wilson</h1>
                    <h3>App Developer</h3>
                    <p>Electronic Engineer, web developer and python developer. <br/>I am an app developer with great interest in data management and solving problems involving software implementation. I am always looking for new things to learn, at the moment, I am learning Next.js and React.</p>
                </article>
            </section>
            <section id="About" className="home--section">
                <article className="home--article">
                    <h1 className="about--title">About Me</h1>
                    <div className="home--carousel--card">
                        <div className="home--carousel">

                            <motion.img 
                                className="carousel--item"
                                src="familia.jpg" 
                                alt="img 1" 
                                height="370px"
                                animate={{
                                    opacity: [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                                    x: [0, 0, 0, 0, 0, 0, -50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                                    transition:{

                                        duration: 17,
                                        repeat: Infinity,
                                        ease:"linear"
                                        
                                    }
                                }}
                            />
                            <motion.img 
                                className="carousel--item"
                                src="/universidad.jpg" 
                                alt="img 2" 
                                height="370px"
                                animate={{
                                    opacity: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                                    x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -50, 0, 0, 0, 0, 0],
                                    transition:{

                                        duration: 17,
                                        repeat: Infinity,
                                        ease:"linear"
                                    }
                                }}
                            />
                            <motion.img 
                                className="carousel--item"
                                src="/wom.jpg" 
                                alt="img 3" 
                                height="370px"
                                animate={{
                                    opacity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
                                    x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -50],
                                    transition:{

                                        duration: 17,
                                        repeat: Infinity,
                                        ease:"linear"
                                    }
                                }}
                            />

                        </div>
                        <p>I was born in Pasto, Nariño, and my academic and professional journey has been marked by a strong background in electronic engineering. Initially, I acquired knowledge in electrical installations and basic electronics during my education at a technical school. Later on, I decided to broaden my academic horizons and graduated in Electronic Engineering from the Pontifical Javeriana University.<br/><br/>

                        During my time at university, I delved into the fundamentals of engineering, applied physics, and microcontroller programming. Additionally, I specialized in areas such as artificial intelligence, Internet of Things (IoT), and image processing and vision, solidifying my interest in technological development.<br/><br/>

                        My dedication was recognized with an honorable mention for my thesis.<br/> I applied my knowledge in a practical setting. My professional internships at WOM (Partners Telecom Colombia) were an invaluable opportunity to put my skills into practice. In diverse projects, from developing a process manager with Tkinter to implementing web applications with Django and creating APIs for automatic queries to Oracle databases, I showcased my proficiency in Python programming.<br/><br/>

                        Throughout this experience, I also gained expertise in handling data from key tools such as Zabbix, Grafana, and AppDynamics, translating into effective solutions. My IBM Data Fundamentals certification and participation in the ONE (Oracle Next Education) program reflect my ongoing commitment to learning. Currently, I am focused on expanding my knowledge in Backend with Java, taking advantage of the opportunities that the ONE program provides to strengthen my skills in web programming.<br/><br/>

                        My academic and professional journey has been a constant pursuit of excellence and growth, and I am excited to continue expanding my knowledge and contributing to the field of technology.</p>
                    </div>
                </article>
            </section>
            <section id="Proyects" className="home--section">
                <article className="home--article">
                    <h1>My Proyects!</h1>
                    {proyectsElement}
                </article>
            </section>
        </main>
    )
}