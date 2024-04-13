import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../components/client.js';

const EditMember = () => {
    const { id } = useParams();
    const [crewmate, setCrewmate] = useState({ id: null, Name: "", Speed: "", Color: "" });
    const [name, setName] = useState("");
    const [speed, setSpeed] = useState("");
    const [color, setColor] = useState("");
    useEffect(() => {
        const fetchCrewmate = async () => {
            const { data, error } = await supabase
                .from('Crew')
                .select()
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error fetching crewmate:', error.message);
            } else {
                setCrewmate(data);
                setName(data.Name);
                setSpeed(data.Speed);
                setColor(data.Color);
            }
        };

        fetchCrewmate();
    }, [id]);

    const handleName = (event) => {
        setName(event.target.value);
        const newmemberdata = {id:crewmate.id, Name:event.target.value, Speed:crewmate.Speed, Color:crewmate.Color};
        setCrewmate(newmemberdata);
    };
    const handleColor = (event) => {
        setColor(event.target.value);
        const newmemberdata = {id:crewmate.id, Name:crewmate.Name, Speed:crewmate.Speed, Color:event.target.value};
        setCrewmate(newmemberdata);
    };
    const handleSpeed = (event) => {
        setSpeed(event.target.value);
        const newmemberdata = {id:crewmate.id, Name:crewmate.Name, Speed:event.target.value, Color:crewmate.Color};
        setCrewmate(newmemberdata);
    };

    const updateCrewmate = async (event) => {
        event.preventDefault();
        await supabase
            .from('Crew')
            .update({ Name: name, Color:color, Speed:speed })
            .eq('id', id);
        window.location = "/";
    };

    const deleteCrewmate = async (event) => {
        event.preventDefault();
        await supabase
            .from('Crew')
            .delete()
            .eq('id', id);
        window.location = "/";
    };

    useEffect(() => {
        if (!crewmate) {
            // Redirect if crewmate is not found
            history.push("/not-found");
        }
    }, [crewmate]);

    return (
        <div className='edit'>
            <h1>Editing Crewmate</h1>
            {crewmate.id && (
                <form onSubmit={updateCrewmate}>
                    <label htmlFor="name">Name:</label> <br />
                    <input type="text" id="name" name="Name" value={crewmate.Name} onChange={handleName} /><br />
                    <br />

                    <label htmlFor="color">Color:</label>
                    <input type="text" id="color" name="Color" value={crewmate.Color} onChange={handleColor} /><br />
                    <br />

                    <label htmlFor="speed">Speed (mph)</label><br />
                    <input type="text" id="speed" name="Speed" value={crewmate.Speed} onChange={handleSpeed} /><br />
                    <br />
                    <input type="submit" value="Submit" />
                    <button className="deleteButton" onClick={deleteCrewmate}>Delete Crewmate</button>
                </form>
            )}
        </div>
    );
};

export default EditMember;