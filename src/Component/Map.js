import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

//Passes down the pubs to be mapped and displayed
function Map({ pubs }) {
	//Styling for the map area
	const containerStyle = {
		width: "60vw",
		height: "40vh",
		border: "6px solid #f7ce3e",
		borderRadius: "30px",
	};
	//Sets the inital focus for the map on load
	const edinburgh = {
		lat: 55.96,
		lng: -3.191086,
	};

	return (
		// uses the API key to allow access to the API
		<LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}>
			{/* Loads the maps component stating the initial zoom and position and styling */}
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={edinburgh}
				zoom={12}
			>
				{/* maps the pubs data (lat,long) to make the position attribute in the marker. Sets the label name to be the index+1*/}
				{pubs.map(({ Latitude, Longitude }, index) => (
					<Marker
						key={index}
						position={{ lat: Latitude, lng: Longitude }}
						label={`${index + 1}`}
						labelStyle={{ fontSize: "3rem" }}
					></Marker>
				))}
			</GoogleMap>
		</LoadScript>
	);
}

export default React.memo(Map);
