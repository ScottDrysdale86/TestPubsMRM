import React from "react";
import Pub from "./Pub";
import styled from "styled-components";

const PubList = ({ pubs }) => {
    // maps the pubs and passes the pub and index down to the Pub component
	const mappedPub = pubs.map((pub, index) => {
		return <Pub pub={pub} index={index} key={index} />;
	});

	return <Wrapper>{mappedPub}</Wrapper>;
};

const Wrapper = styled.section`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`;
export default PubList;
