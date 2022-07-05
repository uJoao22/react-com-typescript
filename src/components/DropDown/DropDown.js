import './DropDown.css'
import TimeContext from '../../context/times';

export const DropDown = (props) => (
    <div className="drop-down">
        <label>{props.label}</label>

        <TimeContext.Consumer>
            {itens => (
                <select value={props.valor} onChange={e =>  props.aoAlterado(e.target.value)} required={props.required}>
                    {itens.map(item => <option key={item}>{item}</option>)}
                </select>
            )}
        </TimeContext.Consumer>


    </div>
)