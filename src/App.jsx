import PaginaInicial from "./pages/PaginaInicial/PaginaInicial";
import Sidebar from "./Components/Sidebar/SideBtn";
import PaginaNordeste from "./pages/PaginaNordeste/PaginaNordeste";
import { useNavigate } from "react-router-dom";
import PaginaSudeste from "./pages/PaginaSudeste/PaginaSudeste";
import PaginaCentroOeste from "./pages/PaginaCentroOeste/PaginaCentroOeste";

function App() {

  const navigate = useNavigate();

  function onClickStateTemperatureSection(event) {
    event.preventDefault();
    navigate("/cities");
  }

  return (
    <>
      <Sidebar />
      <PaginaInicial
        regiao="Sudeste"
        temperatura="10º"
        placeholder="Digite o estado que você deseja saber mais..."
        onClick={onClickStateTemperatureSection}
      />
      <PaginaNordeste />
      <PaginaSudeste />
      <PaginaCentroOeste />
    </>
  )
}
export default App;
