import React, { useState, useEffect } from 'react';
// import FunnelForm from './Forms/FunnelForm';
import { Store,  } from '../../Context/Store';
import { dynamicFeatures, cardmaker, dynamicConnection  } from '../../Context/InitalState';

import RegularQuestoin from './RegularQuestoin';
import InputQuestion from './InputQuestion';
import DynamicInputs from './DynamicInputs';
import InputSlider from './InputSlider';
import { imagePath } from '../../utils/assetUtils';
import DataForm from '../Forms/dataForm';
import ThankyouPage from '../../views/thankyoupage';
import { Popover } from 'antd';
import { Info } from '../Icons'
import CalendlyForm from '../Forms/CalendlyForm';
import Results from '../Results';

export default function Funnel(props) {

  const { state, dispatch } = React.useContext(Store)

  const { currentQuestionIndex, data, currentArea } = state

  // const currentQuestion = state.areas[state.currentArea][currentQuestionIndex]

  const questions = state.questions;
  const question = state.questions[state.questions.length - 1];
  const isMultiselect = question.multiselect


  const [updateQuestion, setUpdateQuestion] = useState(false);

  const [minHeight, setMinHeight] = useState('300px');
  const [styles, setStyles] = useState({
    fadeIn: {
      animation: 'x .4s',
      zIndex: '1',
      animationName: 'fadein'
    }
  });

  useEffect(() => {
    setUpdateQuestion(false)
    setTimeout(() => { setUpdateQuestion(true) }, 100)

  }, [question])



  useEffect(() => {
    if (data.useCase && data.targetGroup) {
      let useCase = state.data.useCase.map(i => i.value)
      let targetGroup = state.data.targetGroup.map(i => i.value)
      let question = state.areas.conditionsArea.find(i => i.id === 'welche-features-sind-benötigt')
      question.cards = dynamicFeatures([...useCase, ...targetGroup]);
      let questionIndex = state.areas.conditionsArea.findIndex(i => i.id === 'welche-features-sind-benötigt')
      dispatch({ type: 'UPDATE_QUESTION_CARDS', payload: { question, questionIndex, questionArea: 'conditionsArea' } })
      ////
      let question1 = state.areas.conditionsArea.find(i => i.id === 'welche-anbindungen-werden-benötigt')
      question1.cards = dynamicConnection([...useCase, ...targetGroup]);
      let questionIndex1 = state.areas.conditionsArea.findIndex(i => i.id === 'welche-anbindungen-werden-benötigt')
      dispatch({ type: 'UPDATE_QUESTION_CARDS', payload: { question: question1, questionIndex: questionIndex1, questionArea: 'conditionsArea' } })

    }
  }, [data.useCase, data.targetGroup])


  useEffect(() => {
    if (data.hostingModel === 'Lokal') {
      let question = state.areas.projectArea.find(i => i.id === 'hoehe-projektbudget')
      question.cards = cardmaker('projectArea', 'wann-einführung-geplant', [{ text: 'bis 5.000€', value: 'bis 5.000€' }, { text: '5.000-15.000€', value: '5.000-15.000€' }, { text: '>15.000€', value: ">15.000€" }], 'budget', 'hoehe-projektbudget');
      let questionIndex = state.areas.projectArea.findIndex(i => i.id === 'hoehe-projektbudget')
      dispatch({ type: 'UPDATE_QUESTION_CARDS', payload: { question, questionIndex, questionArea: 'projectArea' } })
    }
  }, [data.hostingModel])


  const nextQuestion = async (selector = question.cards.find(i => i.active)) => {
    dispatch({ type: 'NEXT_QUESTION', payload: '' })
  }





  useEffect(() => {
    // if (currentQuestionIndex !== 1) {
    //   props.history.push(`${props.slideId}?i=${currentQuestionIndex}`);
    // }
    return () =>
      setStyles({
        fadeIn: {
          animation: 'x .4s',
          zIndex: '1',
          animationName: 'fadein'
        }
      });
  }, [currentQuestionIndex]);

  const renderQuestions = () => {
    switch (question.id) {
      case 'welche-anbindungen-werden-benötigt':
        return question.cards.map((selector, index) => (<InputQuestion selector={selector} index={index} />));
      case 'wie-viele-nutzer':
        return <InputSlider />;
      case 'gibt-es-noch-etwas-zu-berücksichtigen':
        return <textarea className="additionalRequirementsArea" placeholder="z.B. nur deutschsprachiger Kundendienst" value={state.data.specialInfo} onChange={e => additionalInputChange(e, { payloadKey: "specialInfo", })} />
      default:
        return question.cards.map((selector, index) => (<RegularQuestoin selector={selector} index={index} />));
    }

  }

  const additionalInputChange = (e, selector) => {
    e.preventDefault();
    if (!isMultiselect) {
      const data = { ...state.data, [selector.payloadKey]: e.target.value }
      const questions = state.questions
      questions[questions.length - 1].cards.find(i => i.additional).value.value = e.target.value
      dispatch({ type: 'UPDATE_STATE', payload: { data, questions } })

    }
    else {
      if (selector.inputKey !== 'default' || selector.inputKey) {
        const index = state.data[selector.payloadKey].findIndex(i => i.text === selector.value.text)
        const newKey = state.data[selector.payloadKey]
        newKey[index].value = e.target.value
        const data = { ...state.data, [selector.payloadKey]: newKey }
        dispatch({ type: 'UPDATE_STATE', payload: { data } })

      }
      else {
        const index = state.data[selector.payloadKey].findIndex(i => i.text === selector.text)
        const newKey = state.data[selector.payloadKey]
        newKey[index].value = e.target.value
        const data = { ...state.data, [selector.payloadKey]: newKey }
        dispatch({ type: 'UPDATE_STATE', payload: { data } })
      }

    }

  }


  const skip = () => {
    dispatch({ type: 'SKIPP_QUESTION', payload: question.skippable })
  }


  const disableButton = () => {
    let additional = question.cards.find(i => i.additional)

    let email = question.cards.find(i => i.value && i.value.inputKey === 'email')
    if (email && email.active && !email.value.value) return true
    let telephoneSystem = question.cards.find(i => i.value && i.value.inputKey === 'telephoneSystem')
    if (telephoneSystem && telephoneSystem.active && !telephoneSystem.value.value) return true
    let erp = question.cards.find(i => i.value && i.value.inputKey === 'erp')
    if (erp && erp.active && !erp.value.value) return true
    if (question.cards.find(i => i.value && i.value.inputKey) && additional && additional.active && (additional.value.value === '' || additional.value.value === 'Andere')) return true
    if (additional && additional.active && additional.value.value !== 'Andere') return false

    if (additional && additional.active && (additional.value.value === 'Andere')) return true
    else if (!question.cards.find(i => i.active) && !question.buttonDisabled) return true
    else if (!isMultiselect && question.buttonDisabled) return true
    else if (!isMultiselect && question.buttonDisabled && question.cards.find(i => i.active)) return false
    else if (!isMultiselect && !question.buttonDisabled && question.cards.find(i => i.active)) return false
    else if (!isMultiselect && !question.buttonDisabled) return false

    else return false
  }


  const submitInput = (e) => {
    e.preventDefault();
    if(question.cards.filter(i => i.active).filter(j => j.value !== '' || j.value !== 'Andere')){
      dispatch({ type: 'NEXT_QUESTION', payload: '' })
    }
  }



  const additional = question.cards.find(i => i.additional) || false
  return (
    <React.Fragment>
      <div className="whiteBoxFunnel">
    

        <div className="whiteBoxFunnelWrapper">
          { state.showThankyouPage ? <ThankyouPage /> : <>
          {question.id === 'result-page' && <Results />}
          {question.id === 'contact-form' && <DataForm />}
          {question.id === 'calendly-form' && <CalendlyForm />}

          {question.id !== 'result-page' && question.id !== 'contact-form' && question.id !== 'calendly-form' &&
            <>

              {/* add animation fade-in-right-question */}
              {updateQuestion && <><h2 className={'questionHeadline fade-in-right-question'}><span>{question.question}</span>{question.info && <Popover content={question.info.content} trigger="hover" placement="bottom" arrowPointAtCenter><span><img src={imagePath('questionmark.svg')} /></span></Popover>}</h2>
                <h3 className="multiselectSubheadline fade-in-right-question">{isMultiselect && 'Mehrfachauswahl möglich'}</h3></>}
                <div>
                {updateQuestion && <div className="selectorWrapper fade-in-right-question">
                  <div className="answers">

                      {
                        renderQuestions()
                      }
                    </div>
                    {question.skippable && <a><span className="skipQuestion" onClick={() => skip()}>{question.skippable.content}</span></a>}
                    {
                      question.id === 'welche-anbindungen-werden-benötigt' &&
                      <DynamicInputs />
                    }

                    <div>
                      {additional && additional.active &&
                        <form className="dynInputForm" onSubmit={e => submitInput(e)}>
                          <label>{additional.label}</label>
                          <input
                            onChange={e => additionalInputChange(e, additional)}
                            placeholder={additional.placeholder}
                          />
                        </form>
                      }
                    </div>

                  <div className={currentQuestionIndex === 0 && currentArea === 'conditionsArea' ? 'buttonWrapper buttonWrapperNone' : 'buttonWrapper'}>
                      {currentQuestionIndex === 0 && currentArea === 'conditionsArea' ? null :
                        <button className="backButton" onClick={() => dispatch({ type: 'PREV_QUESTION', payload: '' })}>
                          <span>
                            <img src={imagePath('backbutton.svg')}></img>
                          </span>
                        </button>
                      }
                      <button
                        type='primary'
                        className="nextButton onlyMobile fade-in-bottom"
                        disabled={disableButton()}
                        onClick={() => nextQuestion()}
                      >
                        <span>
                          Weiter
                    <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-4.10887e-08 7.06L3.09042 4L-3.08602e-07 0.940001L0.951417 4.35249e-07L5 4L0.951417 8L-4.10887e-08 7.06Z" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                }
                </div>
              </>
              }
              </>
            }
            </div>
      </div>
    </React.Fragment>
      );
}