import "../App.css";
import { useState, useEffect } from "react";
import Map from "../Component/Map";
import styled from "styled-components";
import PubList from "../Component/PubList";

function MainContainer() {
	//Set state to store the list of pubs
	const [pubs, setPubs] = useState([]);

	//fetch the data from the API. returns the promise once fulfilled and save the data to pubs
	const getPubs = function () {
		fetch("/api/pubs")
			.then((res) => res.json())
			.then((pubs) => setPubs(pubs));
	};

	//on page load get all pubs data
	useEffect(() => {
		getPubs();
	}, []);

	//Shows the content to display. Also the props being passed down to other components
	return (
		<Wrapper>
			<Title>MRM Global Tech Test - Pubs</Title>
			<Map pubs={pubs} />
			<PubsTitle>List of Pubs</PubsTitle>
			<PubList pubs={pubs} />
		</Wrapper>
	);
}
// styling for the return components
const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h1`
	font-size: 4vh;
	text-decoration: underline;
	font-weight: bold;
`;
const PubsTitle = styled.h2`
	font-size: 3vh;
	text-decoration: underline;
	font-weight: bold;
`;

export default MainContainer;
