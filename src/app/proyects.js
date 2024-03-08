import { faPython, faLinux, faRaspberryPi, faReact } from "@fortawesome/free-brands-svg-icons";

export default [
    {
        id:0,
        title:"Development of a computer vision model with recurrent network models to identify situations of violence",
        subtitle:"undergraduate thesis project",
        imgUrl:"/proyects/thesis.png",
        description:"This degree project addresses the growing concern for security through the development of a system for automatic detection of violent situations. Using webcams connected to the Internet, the focus is on the Internet of Things (IoT). Deep learning algorithms are implemented, specifically convolutional and recurrent neural networks, such as MobileNetV2 and LSTM. These models analyze images from surveillance cameras in real time, classifying events as violent or non-violent with an average accuracy of 81.6%. The IoT infrastructure incorporates cameras connected to a Raspberry Pi 4, which processes the images and transfers the results to a MySQL database and the Grafana visualization platform. This system allows real-time monitoring and automatic generation of alerts through Telegram, thus contributing to public and private security in urban environments.",
        icons:[
                {
                    icon: faPython,
                    title: "Python",
                    class: "python"
                }, 
                {
                    icon: faLinux,
                    title: "Linux",
                }, 
                {
                    icon: faRaspberryPi,
                    title: "Raspberry Pi 4",
                    class: "raspberry"
                }
            ],
        imgIcons:[
                    {
                        img:"/icons/mysql.png",
                        title:"MySQL"
                    }, 
                    {
                        img:"/icons/grafana.png",
                        title:"Grafana"
                    }, 
                    {
                        img:"/icons/influxDB.png",
                        title:"InfluxDB"
                    }
                ],
        url:"https://github.com/WilsonBravo/Violence_Detection_Public_Repo",
        fileUrl: "https://repository.javeriana.edu.co/bitstream/handle/10554/66803/attachment_0_Sistema-de-deteccion-de-violencia.pdf?sequence=1&isAllowed=y"
    },
    {
        id:1,
        title:"Web application with Django for data management and API creation",
        subtitle:"Professional Practice Project",
        imgUrl:"/proyects/WebDjango.png",
        description:"This project places a strong emphasis on the backend aspect, specifically handling data from monitoring tools such as Grafana, Zabbix, and AppDynamics. Within this project, I developed a Django-based web application, incorporating features such as scheduled tasks for continuous and automated data retrieval, automatic email notifications, and seamless integration among all mentioned monitoring tools. One notable feature is the storage of data within Django models, efficiently managed through the Django admin panel. The project further showcases the creation of JSON-formatted views, facilitating interaction with external applications based on the resulting data. Python scripts were employed to automate various processes, contributing to a streamlined and efficient workflow. The project's core functionalities include continuous data gathering, automatic email alerts, and the establishment of a structured API incorporating data from all monitoring tools. This comprehensive approach not only ensures robust data management but also enables seamless interaction and integration with external applications. Overall, the project stands out for its sophisticated backend architecture, showcasing the power of Django in managing, structuring, and automating data-related processes.",
        icons:[
                {
                    icon: faPython,
                    title: "Python",
                    class: "python"
                }, 
            ],
        imgIcons:[
                    {
                        img:"/icons/django.svg",
                        title:"Django"
                    }, 
                    {
                        img:"/icons/api.png",
                        title:"API"
                    }, 
                    {
                        img:"/icons/grafana.png",
                        title:"Grafana"
                    }, 
                    {
                        img:"/icons/zabbix.png",
                        title:"Zabbix"
                    },
                    {
                        img:"/icons/appdynamics.png",
                        title:"AppDynamics"
                    }
                ],
    },
    {
        id:2,
        title:"Process manager with Tkinter",
        subtitle:"Professional Practice Project",
        imgUrl:"/proyects/tkinter.png",
        description:"This project centers around the creation of a user-friendly and efficient graphical user interface for handling batch and Python processes within the Windows environment. The application is designed to provide a clear overview of process status (whether running or not) and offers functionality to initiate processes with options for visible or background execution. Additionally, the tool empowers users to stop ongoing processes, providing a comprehensive solution for the management and control of both batch and Python processes on the Windows platform. The emphasis on a friendly interface aims to enhance user experience while ensuring effective process management.",
        imgIcons:["Tkinter", ".bat"],
        icons:[
                {
                    icon: faPython,
                    title: "Python",
                    class: "python"
                }, 
            ],
        imgIcons:[
                    {
                        img:"/icons/bat.png",
                        title:".bat files"
                    }
                ],
    },
    {
        id:3,
        title:"Web Portfolio with Next JS",
        subtitle:"Oracle Next Education proyect",
        imgUrl:"/proyects/WebPortfolio.png",
        description:"In this project I crafted a dynamic and visually appealing webpage using NextJS, incorporating notable libraries such as framer-motion and react-mde. The portfolio seamlessly transitions between light and dark modes, enhancing user experience. The site comprises three key sections: 'Home' offers a detailed self-description, outlining my learning and professional journey, and highlights various projects I've developed. The 'Games' page features an enticing visual layout with simple yet engaging games, showcasing my proficiency in connecting NextJS applications to databases like Firebase and PostgreSQL, along with interaction with APIs. The 'Notes' page, designed using react-mde, presents my thoughts and insights in markdown format, reflecting my commitment to providing organized and aesthetically pleasing content. Overall, the project not only highlights my technical skills but also emphasizes attention to design and user experience, showcasing the versatility and depth of my capabilities as a developer.",
        icons:[
                {
                    icon: faReact,
                    title: "React",
                    class: "react"
                }, 
            ],
        imgIcons:[
                    {
                        img:"/icons/nextjs.png",
                        title:"Next JS"
                    },
                    {
                        img:"/icons/javascript.png",
                        title:"JavaScript"
                    },
                    {
                        img:"/icons/css3.webp",
                        title:"CSS3"
                    },
                    {
                        img:"/icons/postgresql.png",
                        title:"PostgreSQL"
                    }
                ],
    }
]