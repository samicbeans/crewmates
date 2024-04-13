/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { supabase } from './components/client.js'

const ReadCrew = () => {

    const [crew, setCrew] = useState([]);

    useEffect(() => {
        // READ all post from table
        const fetchCrew = async () => {
            const {data} = await supabase
            .from('Crew')
            .select()
            .order('created_at', {ascending: true})
        
            // set state of posts
            setCrew(data);
        }
        fetchCrew();
    }, []);

    const handleEditCrewmate = (id) => {
        // Navigate to the EditCrew page with the crewmate's ID as a parameter
        window.location = `/crewmate/edit/${id}`;
    };
    
    return (
        <div className="ReadCrew">
            {crew && crew.length > 0 ? crew.map((crewmate) => (
                <Link key={crewmate.id} to={`/crewmate/${crewmate.id}`}>
                            <div className="crewmate-card">
                                <p>Name: {crewmate.Name} </p>
                                <p>Speed: {crewmate.Speed} mph </p>
                                <p>Color: {crewmate.Color}</p>
                                <button onClick={() => handleEditCrewmate(crewmate.id)}>Edit Crewmate</button>
                            </div>
                </Link>
            )) : <h2>No Crew Yet 😞</h2>}
        </div>
    )
}

export default ReadCrew;