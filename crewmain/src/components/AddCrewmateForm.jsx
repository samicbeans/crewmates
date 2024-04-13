import { useState } from 'react';
import { supabase } from './client.js';

const AddCrewmateForm = () => {
    const [crewmate, setCrewmate] = useState({ Name: "", Color: "", Speed: "" });

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setCrewmate(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const createCrewmate = async (event) => {
        event.preventDefault();
        await supabase
            .from('Crew')
            .insert({
                Name: crewmate.Name,
                Color: crewmate.Color,
                Speed: crewmate.Speed
            })
            .select();

        window.location = "/";
    };

    return (
        <form onSubmit={createCrewmate}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="Name"
                value={crewmate.Name}
                onChange={handleInputChange}
                required
            />
            <br />
            <label htmlFor="color">Color:</label>
            <select
                id="Color"
                value={crewmate.Color}
                onChange={handleInputChange}
                required
            >
                <option value="">Select color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="pink">Pink</option>
                <option value="black">Black</option>
                <option value="white">White</option>
            </select>
            <label htmlFor="speed">Speed (mph):</label>
            <input
                type="text"
                id="Speed"
                value={crewmate.Speed}
                onChange={handleInputChange}
                required
            />
            <br />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default AddCrewmateForm;