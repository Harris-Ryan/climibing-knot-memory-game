import React from "react";
import styled from 'styled-components'
import Card from './Card.js';
import data from "../../data";


const CardLayout = () => {
  const knotCards = data.climbingKnots.map((knot) => (
    <Card key={knot.id} knot={knot} />
  ))

  return (
    <CardLayoutWrapper>{knotCards}</CardLayoutWrapper>
  );
};


const CardLayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  @media (max-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }
`


export default CardLayout;