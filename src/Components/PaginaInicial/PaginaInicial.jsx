import { WiNightCloudyWindy } from "react-icons/wi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import backgroundCeu from '../../assets/imagemCeu.png'

const PaginaInicial = ( {regiao, temperatura, placeholder} ) => {
    return (
        <section
            className="bg-cover bg-center bg-no-repeat h-screen sm:hidden"
            style={{ backgroundImage: `url(${backgroundCeu})` }}
        >
            <div className="flex mx-1 text-gray-800 text-3xl justify-between relative items-center top-[50%]">
                <IoIosArrowBack />
                <IoIosArrowForward />
            </div>
            <div className="flex flex-col text-center items-center">
                <WiNightCloudyWindy className="text-center text-[180px] text-gray-700 mt-40" />
                <h2 className="text-[40px] text-gray-100">{regiao}</h2>
                <h2 className="text-[150px] text-gray-100">{temperatura}</h2>
                <input className="py-2 px-10 bg-white rounded-2xl" 
                    type="search"
                    placeholder={placeholder}/>
            </div>
        </section>
    )
}

export default PaginaInicial;