import imagemNordeste from '../../assets/imagemNordeste.png'


const PaginaNordeste = () => {
    return (
        <section className="bg-gradient-to-b from-[#478BF9] to-[#898DC7] w-screen h-screen sm:hidden">
            <div className='flex flex-col items-center justify-center text-center'>
                <img className='w-[300px] mt-14 p-2 bg-white' src={imagemNordeste} alt='Imagem do Nordeste' />
                <button className='bg-white px-[25px] py-[5px] rounded-3xl m-5'> Explorar Nordeste </button> {/* Fonte Metrophobic */}
            </div>
            <div className='pt-6 px-10'>
                <p className='text-[#EDEA42] text-3xl pb-4'>Paisagens e Cultura em um só lugar</p> {/* Fonte Merriweather Sans */}
                <p className='text-white text-2xl '>O Nordeste brasileiro é um tesouro de cultura e paisagens. De praias paradisíacas ao sertão, sua gente acolhedora celebra a vida com forró, culinária rica e história vibrante. Um convite à alegria e à diversidade.</p> {/* Fonte Metrophobic */}
            </div>
        </section>
    )
}

export default PaginaNordeste;