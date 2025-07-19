import { FormationType } from "../data/types";
import './Formation.scss';

export interface FormationProps {
    formation: FormationType;
}

function Formation(props: FormationProps) {

    const { formation } = props;

    return (
        <div className="formation">
            <div className='annee'>
                {formation.annee ? formation.annee : '20xx'}
            </div>
            <div className='diplome'>{formation.diplome}</div>
            <div className='etablissement'>{formation.etablissement}</div>
        </div>
    );
}

export default Formation;