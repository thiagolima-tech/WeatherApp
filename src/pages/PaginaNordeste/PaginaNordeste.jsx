import imagemNordeste from '../../assets/imagemNordeste.png'


const PaginaNordeste = () => {
    return (
        <section className="bg-gradient-to-b from-[#478BF9] to-[#898DC7] w-screen h-screen">
            <div className='flex justify-center text-center'>
                <img className='w-[300px] m-14 p-2 bg-white' src={imagemNordeste} alt='Imagem do Nordeste' />
            </div>
        </section>
    )
}

export default PaginaNordeste;