import { WiNightCloudyWindy } from "react-icons/wi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import backgroundCeu from '../../assets/imagemCeu.png'

const PaginaInicial = ( {regiao, temperatura, placeholder, onClick} ) => {
    return (
        <section
            className="bg-cover bg-center bg-no-repeat h-screen"
            style={{ backgroundImage: `url(${backgroundCeu})` }}
        >
            <div className="flex mx-1 text-gray-800 text-3xl justify-between relative items-center top-[50%]">
                <IoIosArrowBack cursor="pointer"/>
                <IoIosArrowForward cursor="pointer"/>
            </div>
            <div className="flex flex-col items-center cursor-pointer" onClick={onClick}>
                <WiNightCloudyWindy className="text-center text-[180px] text-gray-800 mt-40" />
                <h2 className="text-[40px] text-gray-100 font-Metrophobic">{regiao}</h2>
                <p className="text-[150px] text-gray-100 font-Metrophobic relative top-[-25px]">{temperatura}</p>
            </div>
            <div className="flex justify-center">
                <input className="py-2 pl-4 pr-6 bg-white rounded-2xl" placeholder={placeholder} />
            </div>
        </section>
    )
}

export default PaginaInicial;