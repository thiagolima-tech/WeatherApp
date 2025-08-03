import BtnExplorarRegiao from '../../Components/BtnExplorarRegiao/BtnExplorarRegiao';

const CardImagem = ({imagem, nomeRegiao}) => {
    return (
        <div className=' text-center'>
            <img className='w-[300px] p-2 bg-white' src={imagem} alt={`Imagem do ${nomeRegiao} `} />
            <BtnExplorarRegiao nomeRegiao={nomeRegiao}
            />
        </div>
    )
}

export default CardImagem;