import { CompetenceType } from "../data/types";
import './Competence.scss';

export interface CompetenceProps {
    competence: CompetenceType;
}


function Competence(props:CompetenceProps) {

    const { competence } = props;

    return (
        <div className="Competence">
            <span className='competence'>{competence.titre}</span>
        </div>
    );
}

export default Competence;