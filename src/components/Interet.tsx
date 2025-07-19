import './Interet.scss';

export interface InteretProps {
    interet: string;
}

function Interet(props: InteretProps) {

    const { interet } = props;

    return (
        <div className="Interet">
            <span className='interet'>{interet}</span>
        </div>
    );
}

export default Interet;