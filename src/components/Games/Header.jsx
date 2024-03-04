import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Header () {
    return (
        <header className="games--header">
            <nav>
                <ul className="nav--list">
                    <li className="nav--items">
                        <FontAwesomeIcon icon={faSearch} className="header--icons"></FontAwesomeIcon>
                        <input type="text" />
                    </li>
                    <li className="nav--items user--options">
                        <button className="user--items user--profile">
                            <FontAwesomeIcon icon={faUser} className="fa-user"></FontAwesomeIcon>
                            User
                        </button>
                        <button className="user--items user--logout">Log Out</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}