import iconeBrasil from '../../assets/brazil.png'
import imagemRioDeJaneiro from '../../assets/imagemRJ.png'
import CardImagem from '../../Components/CardImagem/CardImagem';

const PaginaSudeste = () => {
    return (
        <>
            <section className="bg-gradient-to-b from-[#898DC7] to-[#5A416B] w-screen h-screen sm:hidden">
                <div className="flex flex-col justify-center items-center p-15 h-screen ">
                    <img className='w-16' src={iconeBrasil} alt='icone do Brasil' />
                    <p className='text-white text-center my-5 text-[22px] font-Metrophobic'>
                        O Sudeste é o corpora econômico e cultural do Brasil. De metrópoles a montanhas e praias, pulsa diversidade e energia.
                    </p>
                    <CardImagem
                        nomeRegiao='Sudeste'
                        imagem={imagemRioDeJaneiro}
                    />

                </div>

            </section>
            <section className="bg-gradient-to-b from-[#5d436e] to-[#211828] w-screen h-screen sm:hidden">
                
            </section>
        </>
    )
}

export default PaginaSudeste;