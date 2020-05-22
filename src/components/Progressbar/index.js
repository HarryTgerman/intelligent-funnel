import React from 'react';
import { Store } from '../../Context/Store';



export default function ProgressBar(props) {
    const { state, dispatch } = React.useContext(Store);

    const [amountOfQuestionsToGo, setAmountOfQuestionsToGo] = React.useState()
    const [progressBarWidth, setProgressBarWidth] = React.useState((state.currentQuestionIndex / amountOfQuestionsToGo) * 100)

    React.useEffect(() => {
        if (state.currentArea == "conditionsArea") {
            setAmountOfQuestionsToGo(11);
        } else if (state.currentArea == "projectArea") {
            setAmountOfQuestionsToGo(4);
        } else if (state.currentArea == "applicationArea") {
            setAmountOfQuestionsToGo(4);
        }
    }, [state.currentArea])

    React.useEffect(() => {
        setProgressBarWidth((state.currentQuestionIndex / amountOfQuestionsToGo) * 100)
    }, [state.currentQuestionIndex, amountOfQuestionsToGo])


    if(state.currentArea === 'resultsArea') {
        return null
    }

    return (
        <div className="loadBar" style={ { 'width': progressBarWidth + '%' } }></div>

    )
}