import './DropDown.css'
import TimeContext from '../../context/times';

export const DropDown = (props) => (
    <div className="drop-down">
        <label>{props.label}</label>

        <TimeContext.Consumer>
            {itens => (
                <select required={props.required}
                    onChange={e =>  props.aoAlterado(e.target.value)} 
                    value={props.valor}
                >
                    <option value="">Selecione um time</option>
                    {itens.map(item => <option key={item}>{item}</option>)}
                </select>
            )}
        </TimeContext.Consumer>


    </div>
)