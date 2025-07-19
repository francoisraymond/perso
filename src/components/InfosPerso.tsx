
import './InfosPerso.scss';
import data from '../data/experience.json';
import Langue from './Langue';
import Competence from './Competence';
import Interet from './Interet';
import Formation from './Formation';
import Experience from './Experience';
import photo from '../assets/photo.jpg';


function InfosPerso() {

    // Calcul de l'âge à partir de la date de naissance
    const birthday = new Date(data.birthday);
    const today = new Date();
    const age = today.getFullYear() - birthday.getFullYear();
    const monthDiff = today.getMonth() - birthday.getMonth();
    const ageCorrected = (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) ? age - 1 : age;


    return (
        <div className="infos">
            <div className="general">
                <div className='photo'>
                    <img src={photo} alt="Photo de profil" />
                </div>
                <div className='nom_complet'>
                    <div className='nom'>{data.nom}</div>
                    <div className='prenom'>{data.prenom}</div>
                </div>
                <div className='details'>
                    <div className='age'>{ageCorrected} ans</div>
                    <div className='sexe'>{data.sexe}</div>
                    <div className='etat_civil'>{data.etat_civil}</div>
                    <div className='permis'>{data.permis}</div>
                </div>
                <div className='contact'>
                    <div className='adresse'>{data.adresse}</div>
                    <div className='postal'>
                        <div className='code_postal'>{data.code_postal}</div>
                        <div className='ville'>{data.ville}</div>
                    </div>
                    <div className='email'>{data.email}</div>
                    <div className='telephone'>{data.telephone}</div>
                </div>
                <div className='langues'>
                    <h2>Langues</h2>
                    {data.langues.map((langue, index) => (
                        <Langue langue={langue} key={index} />
                    )
                    )}
                </div>
                <div className='competences'>
                    <h2>Compétences</h2>
                    {data.competences.map((competence, index) => (
                        <Competence competence={competence} key={index} />
                    ))}
                </div>
                <div className='interets'>
                    <h2>Centres d'intêret</h2>
                    {data.interets.map((interet, index) => (
                        <Interet interet={interet} key={index} />
                    ))}
                </div>
            </div>
            <div className='principal'>
                <div className='formations'>
                    <h1>Formations</h1>
                    <div className='formations-list'>
                        {data.formations.map((formation, index) => (
                            <Formation formation={formation} key={index} />
                        ))}
                    </div>
                </div>
                <div className='experiences'>
                    <h1>Expériences professionnelles</h1>
                    <div className='experiences-list'>
                        {data.experience.map((exp, index) => (
                            <Experience experience={exp} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfosPerso;
