import MapComponent from "./MapComponent";
const CreateEvent = () => {
    return ( 
        <div className="createEvent">
            <h2>Create Event</h2>
            <div className = 'choices'>
                <button>Organize Cleanup</button>
                <button>Organize group diving</button>
                <MapComponent/>
            </div>
        </div>
     );
}
 
export default CreateEvent;