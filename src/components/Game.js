import React from "react";
import styled from 'styled-components';
import CardLayout from "../components/gameBoard/CardLayout";


const Game = () => {

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
