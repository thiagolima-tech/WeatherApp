import PaginaInicial from "./Components/PaginaInicial/PaginaInicial";
import Sidebar from "./Components/Sidebar/SideBtn";

function App() {
  return (
    <>
      <PaginaInicial
        regiao="Sudeste"
        temperatura="10º"
        placeholder="Digite o estado que você deseja saber mais..."
      />
      <Sidebar />
    </>
  )
}
export default App;
