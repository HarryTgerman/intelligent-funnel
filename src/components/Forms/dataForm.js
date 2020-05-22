import React from 'react';
import { imagePath } from '../../utils/assetUtils';
import { Radio, message } from 'antd';
import { Store } from '../../Context/Store';
import { Formik } from 'formik';
import * as api from '../../api';


export default function DataForm(props) {
    const { state, dispatch } = React.useContext(Store)
    const question = state.questions[state.questions.length - 1];

    let ga;
    
    if(window.dataLayer){
        window.dataLayer.push({ event: 'finishedcrmform' });
    }
   
    

    function getClientId() {
        if(ga){
        try {
          var tracker = ga.getAll()[0];
          return tracker.get('clientId');
        } catch (e) {
          return 'undefined';
            }
        }else return 'undefined'
    }

    const submitFrom = async(values, setSubmitting) => {

        var marketing_paramters = {
            utm_source: api.getURLParameter('utm_source'),
            utm_medium: api.getURLParameter('utm_medium'),
            utm_campaign: api.getURLParameter('utm_campaign'),
            utm_term: api.getURLParameter('utm_term'),
            converted_lp: 'crm.mysoftwarescout.de'
          };

        let newData = state.data
          
        for (let [key, value] of Object.entries(newData)) {
            if(Array.isArray(value)) {
                 if(key === 'connections') {
                    newData['requiredInterface'] =  value.map(j =>  {
                    if(j.inputKey !== 'default') return `${[j.inputKey]}:${j.value}`
                    else return `${j.value}`
                })}
                else  newData[key] = value.map(j => j.value)
            }
        }

        console.log(newData)

        newData.howFound = [marketing_paramters.utm_source]

        let funnel = []; 
        state.questions.forEach(i => {
            if(i.question) funnel.push({ question: i.question, answer: `${state.data[i.cards.find(j => j.active).payloadKey]}`})
             
        }) 
       

        console.log('DATA', newData, 'Funnel', funnel)
        message.loading('Anfrage wird übermittelt')
        var lead = {
            email: values.email,
            phone: values.phone,
            name: values.name,
            company: values.company,
            consent: true,
            additionalInfo: newData,
            numberOfEmployees: newData.numberOfEmployees,
            numberOfSeats: newData.numberOfSeats,
            industry: newData.industry,
            funnel,
            productCategory: 'CRM',
            utm: JSON.stringify(marketing_paramters),
            gaClientId: values.clientId
          };
          
          dispatch({type: 'UPDATE_STATE', payload: { lead } })

          const res = await api.saveLead(lead);
          if(res){
            setSubmitting(false)
            message.success('Anfrage erfolgreich übermittelt')
            await dispatch({ type: 'SKIPP_QUESTION', payload: question.skippable })
          }else {
            setSubmitting(false)
            message.error('Anfrage ist fehlgeschlagen')
          }
         
    }

    return (
        <>
            <div className="contactFormPageWrapper">
                <h2 className="dataformHeadline">Anforderungen erfolgreich aufgenommen</h2>
                <h3 className="subHeadlineContactForm">Ihr persönlicher CRM-Berater recherchiert nun passende Lösungen für Sie aus über 680 Anbietern und präsentiert Ihnen im Anschluss unverbindlich die Ergebnisse.</h3>
                <div className="contactFormWrapper">
                    <h3 className="contactFormDesc">Wie erreichen wir Sie, um Ihnen die passenden CRM-Anbieter vorzustellen?</h3>
                    <Formik
                        initialValues={{ email: '', name: '' , phone: '', company: '', clientId: getClientId() }}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Bitte richtie Email Addresse angeben';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            submitFrom(values, setSubmitting)
                            // console.log('WOOOLLLLT IHR MICH VERARSCHEWN')
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                        <form className="submissionForm crmleadform leadformgeneral" onSubmit={handleSubmit}>
                            <div className="dataEntrySide">
                                <Radio.Group name="gender" buttonStyle="solid" onChange={handleChange}>
                                    <Radio.Button value="male">Herr</Radio.Button>
                                    <Radio.Button value="female ">Frau</Radio.Button>
                                </Radio.Group>
                                <input className="inputFieldContactForm" name="name" type="text" placeholder="Name*" required
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name} />
                                <input className="inputFieldContactForm" name="company" type="text" placeholder="Firma*" required
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.company} />
                                <input className="inputFieldContactForm" name="phone" type="phone" placeholder="Telefon*" required
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phone} />
                                <input className="inputFieldContactForm" name="email" type="mail" placeholder="E-Mail Adresse*" required
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email} />
                                {errors.email && touched.email && errors.email}
                                <div className="agbCheckWrapper">
                                    <input name="consent"  type="checkbox" onChange={handleChange} className="agbCheckBox" required /><span>Ich akzeptiere die <a href="https://mysoftwarescout.de/datenschutzerklaerung/" target="_blank">Datenschutzerklärung</a> und die <a href="https://mysoftwarescout.de/agb/" target="_blank">AGB</a>.</span>
                                </div>
                                <div>
                                    <div className="ContactFormButtonWrapper">
                                        <button type="submit" disabled={isSubmitting}  className="submissionButton"><span>Weiter zur Terminvereinbarung</span></button>
                                        <p className="subButtonTrust">Kostenlos & unverbindlich</p>
                                    </div>
                                </div>
                            </div>
                            <div className="trustSide">
                                <h4>Ihr zugeteilter CRM-Experte:</h4>
                                <div className="upperPartWrapper">
                                    <div className="consultantDescription">
                                        <span id="consultantTitle">Jonas Südfels</span>
                                        <span id="consultantDesc">CRM-Software Experte <br /> Seit 3 Jahren Berater</span>
                                    </div>
                                    <img src={imagePath('jonas.jpg')}></img>
                                </div>
                                <div className="lowerPartWrapper">
                                    <a href="tel:+49 1573 599 4840">+49 1573 599 4840</a>
                                    <a href="mailto:jonassuedfels@mysoftwarescout.de">jonassuedfels@mysoftwarescout.de</a>
                                </div>
                            </div>
                        </form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
}