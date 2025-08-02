import { WiCloudy } from "react-icons/wi";

function CityWeatherCard() {
    return (
        <div 
            className="flex justify-between items-center border-2 border-x-0 border-cyan-900 text-cyan-900 font-semibold" 
            onClick={() => alert("BAHIAAAA")}
        >
            <div className="flex items-center">
                <WiCloudy className="text-6xl"/>
                <p>70°C</p>
            </div>
            <p>Bahia</p>
            <div className="flex items-center gap-4 mr-2">
                <p>70°F</p>
                <p>70°K</p>
            </div>
        </div>
    );
}

export default CityWeatherCard;