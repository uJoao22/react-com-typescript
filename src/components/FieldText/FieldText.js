import './FieldText.css';

export const FieldText = (props) => {

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value);
    }

    return (
        <div className="field-text">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} placeholder={`${props.placeholder}...`} required={props.required}/>
        </div>
    )
}