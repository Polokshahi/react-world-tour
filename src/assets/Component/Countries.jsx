import { useEffect, useState } from "react";
import './countries.css';
import Country from '../Component/Country';


const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {


        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))



    }, [])


    const handleVisitCountry = country => {

       const newVisitedCountries = [...visitedCountries, country]

        setVisitedCountries(newVisitedCountries);

    }
    
    const handleVisitedFlags = flag => {
        // console.log('visited flags');
        // console.log(flag);

        const newFlags = [...visitedFlags, flag];
        setVisitedFlags(newFlags);
    }


    return (

       

     
        <div >


            

            <h3>Total Country: {countries.length}</h3>
            <h4>Visited Country: {visitedCountries.length}</h4>


            <div>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>

            <div className="flags-container">
               {
                visitedFlags.map(flag => <img src={flag}></img>)
               }
            </div>

        
                <div className="countries-style">
                    
                {
                countries.map(country => <Country 


                    handleVisitCountry = {handleVisitCountry}
                    handleVisitedFlags = {handleVisitedFlags}
                    
                    key={country.cca3} country ={country}></Country>)
                }
                </div>
            
        </div>
    );
};

export default Countries;