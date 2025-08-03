import PaginaInicial from "./pages/PaginaInicial/PaginaInicial";
import Sidebar from "./Components/Sidebar/SideBtn";
import PaginaNordeste from "./pages/PaginaNordeste/PaginaNordeste";
import PaginaSudeste from "./pages/PaginaSudeste/PaginaSudeste";

function App() {
  return (
    <>
      <Sidebar />
      <PaginaInicial
        regiao="Sudeste"
        temperatura="10º"
        placeholder="Digite o estado que você deseja saber mais..."
      />
      <PaginaNordeste />
      <PaginaSudeste />
    </>
  )
}
export default App;
