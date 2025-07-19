import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LangueType } from "../data/types";
import './Langue.scss';
import { faCheck, faComment, faEdit, faEye } from "@fortawesome/free-solid-svg-icons";

export interface LangueProps {
    langue: LangueType;
}

function Langue(props: LangueProps) {

    const { langue } = props;

    return (
        <div className="langue">            
            <span>{langue.langue}</span>
            {langue.lu ? <FontAwesomeIcon icon={faEye} className="icon" title="Lu" /> : null}
            {langue.ecrit ? <FontAwesomeIcon icon={faEdit} className="icon" title="Ecrit" /> : null}
            {langue.parle ? <FontAwesomeIcon icon={faComment} className="icon" title="Parlé" /> : null}
        </div>
    );
}

export default Langue;