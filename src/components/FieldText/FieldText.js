import './FieldText.css';

export const FieldText = (props) => {
    return (
        <div className="field-text">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} required={props.required}/>
        </div>
    )
}