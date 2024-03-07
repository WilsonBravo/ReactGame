import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { faPython, faLinux, faRaspberryPi } from "@fortawesome/free-brands-svg-icons";

export default function ProyectCard ({ item }) {
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
                        <FontAwesomeIcon title="Python" icon={faPython} className="proyect--card--icons python"></FontAwesomeIcon>
                        <FontAwesomeIcon title="Linux" icon={faLinux} className="proyect--card--icons"></FontAwesomeIcon>
                        <FontAwesomeIcon title="Raspberry Pi" icon={faRaspberryPi} className="proyect--card--icons raspberry"></FontAwesomeIcon>
                        <img title="MySQL" src="/icons/mysql.png" width="40px" height="40px" alt="MySQL" />
                        <img title="Grafana" src="/icons/grafana.png" width="36px" height="36px" alt="Grafana" />
                        <img title="InfluxDB" src="/icons/influxDB.png" width="36px" height="36px" alt="InfluxDB" />
                        <FontAwesomeIcon icon={faExternalLink } className="proyect--card--icons"></FontAwesomeIcon>
                    </div>

                </div>


            </div>

        </div>
    )
}