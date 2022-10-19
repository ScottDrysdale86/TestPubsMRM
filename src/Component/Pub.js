import React from "react";
import styled from "styled-components";

const Pub = ({ pub, index }) => {
	return (
		// Breaks down the pub object to display individual data
		<Wrapper>
			<Title>Pub {index + 1}</Title>
			<Details>Lat: {pub.Latitude}</Details>
			<Details>Long: {pub.Longitude}</Details>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	border: 6px solid #f7ce3e;
	border-radius: 30px;
	margin: 1%;
	width: 15vw;
`;

const Title = styled.h3`
	font-size: 2vh;
`;
const Details = styled.p`
	font-size: 1.5vh;
`;
export default Pub;
