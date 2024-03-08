import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink, faFile } from "@fortawesome/free-solid-svg-icons";
import { faPython, faLinux, faRaspberryPi } from "@fortawesome/free-brands-svg-icons";

export default function ProyectCard ({ item }) {

    const faIconsElements = item.icons.map((icon)=> <FontAwesomeIcon 
        key={icon.title}
        icon={icon.icon} 
        title={icon.title}
        className={icon.class?"proyect--card--icons "+icon.class:"proyect--card--icons"
    }></FontAwesomeIcon>)

    const IconsElements = item.imgIcons.map((imgIcon)=><img 
            key={imgIcon.title}
            title={imgIcon.title} 
            src={imgIcon.img} 
            width="36px" 
            height="36px" 
            alt={imgIcon.title} 
        />)

    return (
        <div className="proyect--card">
            <div className="proyect--card--title">

                <h2>{item.title}</h2>
                <h3>{item.subtitle}</h3>

            </div>
            
            <div className="proyect--card--container">

                <img className="proyect--card--img" src={item.imgUrl} width={300} height={300} alt="proyect_image_0" />

                <div>

                    <p>{item.description}</p>

                    <div className="proyect--card--icons--container">
                        
                        {faIconsElements}
                        {IconsElements}

                        {item.url && <a href={item.url} target="_blank">
                            <FontAwesomeIcon icon={faExternalLink } className="link"></FontAwesomeIcon>
                        </a>}
                        {item.fileUrl && <a href={item.fileUrl} target="_blank">
                            <FontAwesomeIcon icon={faFile } className="link"></FontAwesomeIcon>
                        </a>}

                    </div>

                </div>


            </div>

        </div>
    )
}