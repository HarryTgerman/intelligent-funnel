import React from 'react';
import { imagePath } from '../utils/assetUtils';

export default function ThankyouPage(props){

    const [ feedback, setFeedback ] = React.useState(0)
    
    return (
        <>
        <div className="thankyouWrapper">
            <p className="geschafft">Geschafft!</p>
            <h2 className="questionHeadline thankyouHeadline">Ihr persönlicher CRM-Berater recherchiert nun für Sie kostenlos & unverbindlich passende CRM-Systeme</h2>
            <div className="consultantBox">
                <img src={imagePath('jonas.jpg')} />
                <div className="rightInfoContent">
                    <span id="consultantTitleTy" className="tyConsultantInfo">Jonas Südfels</span>
                    <span id="consultantDescTy" className="tyConsultantInfo">CRM-Software Experte</span>
                    <a className="tyConsultantInfo" href="tel:+49 1573 599 4840">+49 1573 599 4840</a>
                    <a className="tyConsultantInfo" href="mailto:jonassuedfels@mysoftwarescout.de">jonassuedfels@mysoftwarescout.de</a>
                </div>
            </div>  
            <div className="nextStepInfo">
                <h3>Nächster Schritt:</h3>
                <h2>Ergebnispräsentation der CRM-Empfehlungen</h2>
            </div>
        </div>
       { feedback === 0 && <div className="feedbackWrapper">
            <h3>Haben Sie das Gefühl wir haben alle wichtigen Anforderungen aufngenommen?</h3>
            <div className="ratingBar">
                <span className="desc1"  >Stimme gar nicht zu</span>
                <div className="ratingPoint" onClick={ () => setFeedback(1)}><span>1</span></div>
                <div className="ratingPoint" onClick={ () => setFeedback(2)}><span>2</span></div>
                <div className="ratingPoint" onClick={ () => setFeedback(3)}><span>3</span></div>
                <div className="ratingPoint" onClick={ () => setFeedback(4)}><span>4</span></div>
                <div className="ratingPoint" onClick={ () => setFeedback(5)}><span>5</span></div>
                <span className="desc2" >Stimme gar voll zu</span>
            </div>
        </div>}
        </>
    );
}