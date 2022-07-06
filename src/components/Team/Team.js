import './Team.css'
import Card from '../Card';

export const Team = ({time, colaboradores}) => {
    const cssSection = { backgroundColor: time.corSecundaria };

    return (
        // Para fazer o filtro de renderizção, pode ser usado tanto o operador do react usando &&, tanto o operador ternario
        colaboradores.length > 0 && <section className='team' style={cssSection}>
            <h3 style={{ borderColor: time.corPrimaria }}>
                {time.nome}
            </h3>

            <div className='colaboradores'>
                {colaboradores.map(
                    colaborador => <Card key={colaborador.nome} colaborador={colaborador} corDeFundo={time.corPrimaria}/>
                )}
            </div>
        </section>
    )
}