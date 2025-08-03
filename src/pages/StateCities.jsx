import { WiDirectionLeft, WiNightCloudyWindy } from "react-icons/wi";
import CityWeatherCard from "../Components/CityWeatherCard";
import { useNavigate } from "react-router-dom";

function StateCities() {
    const navigate = useNavigate();

    function handleClickBack(event) {
        event.preventDefault();
        navigate(-1);
    }

    return (
        <div className="relative">
            <div className="absolute top-2 z-10" onClick={handleClickBack}>
                <WiDirectionLeft size={50} className="cursor-pointer text-gray-700" />
            </div>
            <div className="flex flex-col items-center">
                <WiNightCloudyWindy className="text-center text-8xl text-gray-800" />
                <h1 className="text-2xl">Nordeste</h1>
                <h1 className="text-4xl">10°</h1>
            </div>
            <div className="mt-5">
                <CityWeatherCard />
            </div>
        </div>
    );
}

export default StateCities;