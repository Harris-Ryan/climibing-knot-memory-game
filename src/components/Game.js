import React, { useState } from "react";
import styled from 'styled-components';
import CardLayout from "../components/gameBoard/CardLayout";
import data from '../data';


const Game = () => {
  const [knots, setKnots] = useState(data.climbingKnots);
  // const [clickedKnots, setClickedKnots] = useState([]);
  // const [currentScore, setCurrentScore] = useState(0);
  // const [highestScore, setHighestScore] = useState(0);


  return (
    <GameWrapper>
      <CardLayout />
    </GameWrapper>
    );
};


const GameWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 4rem;
  margin-bottom: 3.5rem;
`

export default Game;
