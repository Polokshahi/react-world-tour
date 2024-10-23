import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitCountry, handleVisitedFlags}) => {
    console.log(country);
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {

        setVisited(!visited);

    }
    const {name,  flags, area, population} = country;
    // console.log(handleVisitCountry);
    return (

        <div className={`country ${visited && 'visited'}`}>

            <h3 style={{color: visited ? 'purple' : 'white'}}> Name: {name.common}</h3>
            <img className='img' src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <button onClick={() => handleVisitCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Visited Flag</button>

            {
                visited  ? 'I have visited this country' : 'I want to visit this country'
            }

          
            
        </div>
    );
};

export default Country;