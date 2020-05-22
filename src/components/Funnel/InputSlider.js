import React from 'react'
import { Slider, InputNumber, Row, Col } from 'antd';
import { Store } from '../../Context/Store';


export default function InputSlider() {
      const { state, dispatch } = React.useContext(Store)

      const [ inputValue, setInputValue ] = React.useState(1)
    
      const onChange = value => {
        setInputValue(value)
        dispatch({ type: 'CHANGE_NUMBER_OF_SEATS', payload: value})
      };

    return (
        <div className="userInputDiv">
        <div>
          <Slider
            min={1}
            max={100}
            onChange={onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
        </div>
        <div className="userInputAlternativ">
          <label>Alternativ eintippen</label>
          <InputNumber
            min={1}
            value={inputValue}
            onChange={onChange}
          />
        </div>
      </div>
    )
}
