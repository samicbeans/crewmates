import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../components/client.js';

const CrewmateDetail = () => {
    const { id } = useParams(); // Get the id parameter from the URL
    const [crewmate, setCrewmate] = useState(null);

    useEffect(() => {
        const fetchCrewmate = async () => {
            const { data, error } = await supabase
                .from('Crew')
                .select()
                .eq('id', id)
                .single(); // Retrieve only one crewmate based on the id

            if (error) {
                console.error('Error fetching crewmate:', error.message);
            } else {
                setCrewmate(data);
            }
        };

        fetchCrewmate();
    }, [id]);

    const handleEditClick = () => {
      // Navigate to the EditCrew page with the crewmate's ID as a parameter
      window.location = `/crewmate/edit/${id}`;
  };

    if (!crewmate) {
        return <div>Crewmate not found</div>;
    }

    return (
        <div className='detail'>
            <h2>Crewmate Details</h2>
            <p>Crewmate ID: {crewmate.id}</p>
            <p>Name: {crewmate.Name}</p>
            <p>Color: {crewmate.Color}</p>
            <p>Speed: {crewmate.Speed}</p>
            {crewmate.Speed !== null && crewmate.Speed > 10 ? <p>Wow, this crewmate is F-A-S-T! They will be great with completing tasks.</p> : <p>This crewmate is a bit slow. They need a real leg workout!</p> }
            <button onClick={handleEditClick}>Edit Crewmate</button>
        </div>
    );
};

export default CrewmateDetail;