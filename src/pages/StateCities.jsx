import { WiNightCloudyWindy } from "react-icons/wi";
import CityWeatherCard from "../Components/CityWeatherCard";

function StateCities() {
    return (
        <div>
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