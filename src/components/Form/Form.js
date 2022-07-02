import { useState } from 'react';
import './Form.css'
import FieldText from '../FieldText';
import DropDown from '../DropDown';
import Button from '../Button';

export const Form = (props) => {

    const [nome, setNome] = useState('João');
    const [cargo, setCargo] = useState('Programador Junior');
    const [imagem, setImagem] = useState('http://asdaskdjas.jpg');
    const [time, setTime] = useState('Programação');
    
    const save = (e) => {
        e.preventDefault();
        props.aoColaboradorCadastrado({nome, cargo, imagem, time});
    }

    return (
        <section className="formulario">
            <form onSubmit={save}>
                <h2>Preencha os dados para criar o card do colaborador</h2>

                <FieldText 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    required
                />

                <FieldText 
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    required
                />

                <FieldText 
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <DropDown 
                    label="Time" 
                    itens={props.times} 
                    valor={time}
                    aoAlterado={valor => {setTime(valor)}}
                    required
                />

                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}