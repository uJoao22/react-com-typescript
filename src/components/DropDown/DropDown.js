import './DropDown.css'

export const DropDown = (props) => {
    return(
        <div className="drop-down">
            <label>{props.label}</label>
            <select value={props.valor} onChange={e =>  props.aoAlterado(e.target.value)} required={props.required}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}