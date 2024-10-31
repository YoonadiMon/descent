const MapComponent = () => {
    const center = {
        lat: 32.7502,
        lng: 114.7655
      };

      const containerStyle = {
        width: '400px',
        height: '400px'
      };
      
    return ( 
        <div>
            <div className="mapComponent">
                <h2>Pick a location</h2>
            </div>
            <iframe
                width="600"
                height="450"
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyACrNXTfikt8TRNFWALOeKF6GQdlrXlgTc&q=United+Kingdom">
            </iframe>
        </div>
     );
}
 
export default MapComponent;