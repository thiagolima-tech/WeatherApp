import imagemNordeste from '../../assets/imagemNordeste.png'
import CardImagem from '../../Components/CardImagem/CardImagem';


const PaginaNordeste = () => {
    return (
        <section className="bg-gradient-to-b from-[#478BF9] to-[#898DC7] w-screen h-screen p-15 flex flex-col items-center justify-center sm:hidden ">
            <CardImagem
            nomeRegiao='Nordeste'
            imagem={imagemNordeste}
            />
            
            <div className='pt-6'>
                <p className='text-[#EDEA42] text-[25px] pb-4 font-Merriweather font-bold'>Paisagens e Cultura em um só lugar</p>
                <p className='text-white text-2xl font-Metrophobic'>O Nordeste brasileiro é um tesouro de cultura e paisagens. De praias paradisíacas ao sertão, sua gente acolhedora celebra a vida com forró, culinária rica e história vibrante. Um convite à alegria e à diversidade.</p>
            </div>
        </section>
    )
}

export default PaginaNordeste;