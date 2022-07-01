import './Form.css'
import FieldText from '../FieldText';
import DropDown from '../DropDown';
import Button from '../Button';

export const Form = () => {

    const times =  [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Deisgn',
        'Mobile',
        'Inovação e Gestão'
    ];

    const save = (e) => {
        e.preventDefault();
        console.log('Form foi submetido');
    }

    return (
        <section className="formulario">
            <form onSubmit={save}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <FieldText label="Nome" placeholder="Digite seu nome" required/>
                <FieldText label="Cargo" placeholder="Digite seu cargo" required/>
                <FieldText label="Imagem" placeholder="Informe o endereço da imagem" />
                <DropDown label="Time" itens={times} required/>
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}