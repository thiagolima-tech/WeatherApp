import CardImagem from "../../Components/CardImagem/CardImagem";
import imagemCentroOeste from "../../assets/imagemCentroOeste.png"

const PaginaCentroOeste = () =>{
    return (
        <section className="bg-gradient-to-b from-[#5A416B] to-[#E6BB31] w-screen h-screen sm:hidden">
            <div className="flex justify-center">
                
                <CardImagem 
                    nomeRegiao='Centro-Oeste'
                    imagem={imagemCentroOeste}
                />
            </div>
                
        </section>
    )
}

export default PaginaCentroOeste;