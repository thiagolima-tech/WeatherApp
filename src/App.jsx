import PaginaInicial from "./pages/PaginaInicial/PaginaInicial";
import Sidebar from "./Components/Sidebar/SideBtn";
import PaginaNordeste from "./pages/PaginaNordeste/PaginaNordeste";
import { useNavigate } from "react-router-dom";

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
    </>
  )
}
export default App;
