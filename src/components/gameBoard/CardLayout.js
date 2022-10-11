import React, { useState } from "react";
import styled from 'styled-components'
import Card from './Card';
import data from "../../data";


const CardLayout = () => { 

  const [knotCards, setKnotCards] = useState(data);

  const knot = knotCards.map((knot) => {
    <Card image={knot.image} name={knot.name} key={knot.id} />
  });

  return (
    <CardLayoutWrapper>
      {knot}
    </CardLayoutWrapper>
  );
}


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