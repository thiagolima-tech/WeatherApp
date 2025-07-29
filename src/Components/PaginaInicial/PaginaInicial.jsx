import { WiNightCloudyWindy } from "react-icons/wi";
import backgroundCeu from "../../assets/imagemCeu.png";

const PaginaInicial = ({ regiao, temperatura, placeholder }) => {
  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col text-center items-center justify-center"
      style={{ backgroundImage: `url(${backgroundCeu})` }}
    >
      <div className="m-10">
        <WiNightCloudyWindy className="text-[180px] text-gray-700" />
        <h2>{regiao}</h2>
        <h2>{temperatura}</h2>
        <input
          className="p-2 bg-white"
          type="search"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default PaginaInicial;
