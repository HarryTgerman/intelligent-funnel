import React, { useState } from 'react'
import Radium, { StyleRoot } from 'radium';
import { Store } from '../../Context/Store';
import { Form } from "formik";

export default function DynamicInputs() {

    const { state, dispatch } = React.useContext(Store)
    const { currentQuestionIndex, data } = state

    const questions = state.areas[state.currentArea];
    const question = state.questions[state.questions.length - 1];
    const isMultiselect = state.areas[state.currentArea][currentQuestionIndex].multiselect
    const inputData = state.data.connections ? state.data.connections : []

    const handleChange = (event, inputSelector) => {
        event.preventDefault()
        let newData = state.data
        let connections = state.data.connections
        let newConnection = connections.map(i => {
            if(i.value.value[0] === inputSelector.value.value[0]){
                 i.value.inputQuestion.input = event.target.value
            }
            return i
        })

        newData = { ...newData, connections: newConnection }
        dispatch({ type: 'UPDATE_DATA_VIA_INPUT', payload: newData })
    }

    const submitInput = (e) => {
        e.preventDefault();
        if(question.cards.filter(i => i.active).filter(j => j.value !== '' || j.value !== 'Andere')){
            dispatch({ type: 'NEXT_QUESTION', payload: '' })
        }
      }



    return (
        <div>
            { inputData && inputData.map((input,index )=> {
                if(input.inputKey === 'default') return <></>
                else return <>
                <form className="dynInputForm" onSubmit={e => submitInput(e)}>
                    <label>{input.question}</label>
                    <input
                     onChange={e => dispatch({ type: 'UPDATE_DATA_VIA_INPUT', payload: { ...input, value: e.target.value}})}
                    value={input.input}
                    placeholder={input.placeholder}
                    /> 
                </form> 
                </>
                
            } )
            }
          
          
        </div>
    )
}
