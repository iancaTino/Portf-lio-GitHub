import Projetos from "./containers/Projetos";
import Sidebar from "./containers/Sidebar";
import Sobre from "./containers/Sobre";
import EstilosGlobal, { Container } from "./styles";

function App() {
  return (
    <>
      <EstilosGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  );
}

export default App;
