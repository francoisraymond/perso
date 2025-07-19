import moment from "moment";
import { ExperienceType } from "../data/types";
import './Experience.scss';

export interface ExperienceProps {
    experience: ExperienceType;
};

function Experience(props: ExperienceProps) {

    const { experience } = props;

    let dtStart = new Date(experience.start);
    let dtEnd = experience.end ? new Date(experience.end) : null;

    const start = moment(dtStart);
    const end = dtEnd ? moment(dtEnd) : moment();

    // Format the start and end dates
    const formattedStart = dtStart.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' });
    const formattedEnd = dtEnd ? dtEnd.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' }) : 'aujourd\'hui';

    // Calculate the duration in months
    const duree = end.diff(start, 'months');
    // Calculate years and months from the duration
    const dureeAnnees = Math.floor(duree / 12);
    const dureeMois = duree % 12;

    // Create a human-readable duration string
    let dureeText = '';
    if (dureeAnnees > 0) {
        dureeText += `${dureeAnnees} an${dureeAnnees > 1 ? 's' : ''}`;
    }
    if (dureeMois > 0) {
        if (dureeText) {
            dureeText += ' et ';
        }
        dureeText += `${dureeMois} mois`;
    }

    return (
        <div className="experience">
            <div className="details">
                <div className='poste'>{experience.poste}</div>
                <div className='entreprise'>{experience.entreprise}</div>
                <div className='periode'>{formattedStart} - {formattedEnd} ({dureeText})</div>
            </div>
            <div className="responsabilites">
                <h2>Responsabilités</h2>
                <div className="responsabilites-list">
                    {experience.responsabilites.map((responsabilite, index) => (
                        <div className="responsabilite" key={index}>
                            {responsabilite}
                        </div>
                    ))}
                </div>
            </div>
            <div className="environnement">
                <h2>Compétences techniques</h2>
                <div className="techniques-list">
                    {experience.environnement_technique.map((tech, index) => (
                        <div className="tech" key={index}>
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;