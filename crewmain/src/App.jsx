import AddCrewmateForm from './components/AddCrewmateForm';
import ReadCrew from './ReadCrew';

function App() {
    return (
        <div>
            <h1>Meet our Crewmates!</h1>
            <h3>Add a Crewmate</h3>
            <div className='add'>
                <AddCrewmateForm />
            </div>
            {/* Display crewmates */}
            <h2>Our Crewmates:</h2>
            <div className='gang'>
                <ReadCrew />
            </div>
        </div>
    );
}

export default App;