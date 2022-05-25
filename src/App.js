import GlobalChannelsList from './components/contexts/GlobalChannelsList';
import Router from './components/router/Router';
import { Container } from './styled';

function App() {
  return (
    <Container>
      <GlobalChannelsList>
        <Router />
      </GlobalChannelsList>
    </Container>
  );
}

export default App;
