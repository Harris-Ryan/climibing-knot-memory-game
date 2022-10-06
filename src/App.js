import styled from 'styled-components'
import Header  from './components/Header';
import Game from './components/Game';
// import Footer from './components/Footer';


function App() {
  return (
    <GameWrapper>
      <Header />
      <Game />
      {/* <Footer /> */}
    </GameWrapper>
  );
}

const GameWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 4rem;
  margin-bottom: 3.5rem;
`

export default App;
