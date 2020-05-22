import React, { useState } from 'react'
import Radium, { StyleRoot } from 'radium';
import { Store } from '../../Context/Store';
import * as Icons from '../Icons'; 

export default function InputQuestion(props) {

    const { state, dispatch } = React.useContext(Store)
    const { currentQuestionIndex, data } = state

    const questions = state.areas[state.currentArea];
    const isMultiselect = state.areas[state.currentArea][currentQuestionIndex].multiselect


    const [styles, setStyles] = useState({
        fadeIn: {
          animation: 'x .4s',
          zIndex: '1',
          animationName: 'fadein'
        }
      });
      

    const { selector, index } = props; 

    const toggleSelectItem = async(selector, index) => {
        // state.selector.areas[selector.pathToArea].indexOf((question) => question.id === selector.id)
        selector.active = !selector.active

        await dispatch({ type: 'UPDATE_DATA', payload: { selector : { ...selector, multiselect: isMultiselect} } })
        if(!isMultiselect){
          await dispatch({ type: 'UPDATE_CARD', payload: {selector, index} })
          await dispatch({ type: 'UPDATE_STATE', payload: { currentQuestionIndex: state.areas[selector.pathToArea].findIndex(i => i.id === selector.pathToQuestion), currentArea: selector.pathToArea} })
        }
        else {
          await dispatch({ type: 'UPDATE_CARD', payload: {selector, index} })
          // await dispatch({ type: 'UPDATE_STATE', payload: { currentQuestionIndex: questions.findIndex(i => i.id === selector.pathToQuestion), currentArea: selector.pathToArea} })
        }
      }

      const DynamicIcon = Icons[`${selector.icon}`]


    return (
        <StyleRoot>
        <div
          key={index}
          style={styles.fadeIn}
          className={
            selector.active ? 'selector selectorActive' : 'selector'
          }
          onClick={() => toggleSelectItem(selector, index)}
      >   {
            // Add Checkbox to multiSelect Question
            isMultiselect && 
            <div className={
            selector.active ? 'multiSelectCheck multiSelectCheckActive' : 'multiSelectCheck'
            }
            ></div>
          }
            {selector.icon && <div className={selector.active ? 'icon iconActive' : 'icon'} ><DynamicIcon /></div>}
          <p
            className={
              selector.active ? 'selectorText selectorTextActive' : 'selectorText'
            }
          >{selector.text}</p>
         { selector.subline && <p className="slectorSubline">{selector.subline}</p>}
        </div>

      </StyleRoot>
    )
}
