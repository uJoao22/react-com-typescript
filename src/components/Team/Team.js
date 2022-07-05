import './Team.css'
import Card from '../Card';

export const Team = (props) => {
    const cssSection = { backgroundColor: props.time.corSecundaria };

    return (
        // Para fazer o filtro de renderizção, pode ser usado tanto o operador do react usando &&, tanto o operador ternario
        props.colaboradores.length > 0 && <section className='team' style={cssSection}>
            <h3 style={{ borderColor: props.time.corPrimaria }}>
                {props.time.nome}
            </h3>

            <div className='colaboradores'>
                { props.colaboradores.map(colaborador => <Card key={colaborador.nome} colaborador={colaborador} />) }
            </div>
        </section>
    )
}