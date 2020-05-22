

import React from 'react';
import { vendors } from './Vendordata';
import { initalState } from './InitalState';
 



export const Store = React.createContext(initalState);

function reducer(state, action) {
  // console.log(action.type, action.payload)
  switch (action.type) {
    case 'UPDATE_DATA_VIA_INPUT':
      let inputChangedData = state.data
      inputChangedData.connections.find(i => i.inputKey === action.payload.inputKey).value = action.payload.value
      return { ...state, data: inputChangedData }
    case 'UPDATE_DATA':
      const { selector } = action.payload
      let newData = state.data
      let newValue = newData[selector.payloadKey]
      if (selector.multiselect) {
        newValue = newValue ? newValue : [];
        if (selector.active) {
          if (selector.value.inputKey) {
            newValue = [...newValue, selector.value]
          }
          else {
            newValue = [...newValue, selector.value]
          }
        } else {
          if (selector.value.inputKey) {
            newValue = newData[selector.payloadKey].filter(i => i.value !== selector.value.value)
          }
          else {
            newValue = newData[selector.payloadKey].filter(i => i.value !== selector.value.value)
          }
        }

      } else {
        if (selector.active) {
          newValue = selector.value.value
        } else newValue = ''
      }
      newData = { ...newData, [selector.payloadKey]: newValue }
      return { ...state, data: newData }
    case 'UPDATE_STATE':
      return { ...state, ...action.payload };
    case 'UPDATE_CARD':
      let newCard = action.payload.selector;
      let newState = state;
      newState.questions[newState.questions.length - 1].cards[action.payload.index] = newCard
      return { ...state, ...newState }
    case 'UPDATE_QUESTION_CARDS':
      let newQuestion = action.payload.question;
      let newState01 = state;
      newState01.areas[action.payload.questionArea][action.payload.questionIndex] = newQuestion
      return { ...state, ...newState01 };
    case 'NEXT_QUESTION':
      let currentQuestion = state.areas[state.currentArea][state.currentQuestionIndex];
      let currentArea = currentQuestion.cards[0].pathToArea
      let currentQuestionIndex = state.areas[currentArea].findIndex(i => i.id === currentQuestion.cards[0].pathToQuestion)
      let nextQuestion = state.areas[currentArea].find(i => i.id === currentQuestion.cards[0].pathToQuestion)
      nextQuestion.currentQuestionIndex = currentQuestionIndex
      nextQuestion.progress = (100 / currentQuestionIndex)
      let questions = [...state.questions, nextQuestion]
      return { ...state, currentArea, currentQuestionIndex, questions };
    case 'CHANGE_NUMBER_OF_SEATS':
      let selectQuestions = state.questions;
      selectQuestions[selectQuestions.length -1].cards[0].active = true
      let ChangedNumberOfSeatsData = { ...state.data, numberOfSeats: action.payload, questions: selectQuestions }
      return { ...state, data: ChangedNumberOfSeatsData };
    case 'PREV_QUESTION':
      if (state.currentQuestionIndex === 1 && state.currentArea === 'conditionsArea' || state.currentQuestionIndex === 4 && state.currentArea === 'conditionsArea') {
        let subtractedQuestions = state.questions.filter((item, index) => index !== state.questions.length - 1);
        let prevQuestion = state.areas.conditionsArea[0];
        let prevData = state.data
        subtractedQuestions[subtractedQuestions.length - 1].cards.map(i => {
          i.active = false
          if (prevData[i.payloadKey]) delete prevData[i.payloadKey]
        })
        return { ...state, currentQuestionIndex: 0, questions: subtractedQuestions, data: prevData };
      }
      else {
        let subtractedQuestions = state.questions.filter((item, index) => index !== state.questions.length - 1);
        let prevQuestion = subtractedQuestions[subtractedQuestions.length - 2] || 'conditionsArea';
        let prevArea = prevQuestion.cards.find(i => i.active).pathToArea
        let prevQuestionIndex = state.areas[prevArea].findIndex(i => i.id === prevQuestion.cards.find(i => i.active).pathToQuestion)
        let prevData = state.data
        subtractedQuestions[subtractedQuestions.length - 1].cards.map(i => {
          i.active = false
          if (i.parentId === 'welche-anbindungen-werden-benötigt' && prevData['connections']) delete prevData['connections']
          else if (prevData[i.payloadKey]) delete prevData[i.payloadKey]
        })
        return { ...state, currentArea: prevArea, currentQuestionIndex: prevQuestionIndex, questions: subtractedQuestions, data: prevData };
      }

    case 'SKIPP_QUESTION':
      let skipToQuestion = state.areas[action.payload.pathToArea].filter(i => i.id === action.payload.nextQuestion)
      let skipToQuestionIndex = state.areas[action.payload.pathToArea].findIndex(i => i.id === action.payload.nextQuestion)
      let newQuestions = [...state.questions, skipToQuestion[0]]

      return { ...state, questions: newQuestions, currentQuestionIndex: skipToQuestionIndex, currentArea: action.payload.pathToArea }
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initalState)
  return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>
}


// ACTIONS
