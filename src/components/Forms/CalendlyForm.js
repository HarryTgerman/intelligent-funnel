import React, { useEffect } from 'react';
import { Store } from '../../Context/Store';
import useEventListener from '../Hooks/Eventlistener';


export default function CalendlyForm(props){
    const { state, dispatch } = React.useContext(Store);

    const [initCalendly, setCalendly] = React.useState(false)

    useEffect(() => {

        const head = document.querySelector('head')
        const script = document.createElement('script')
        script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
        // script.setAttribute('innerHTML', `Calendly.initInlineWidget({ url: "https://calendly.com/mysoftwarescoutgmbh/crm-auswahlberatung?hide_event_type_details=1", parentElement: document.getElementById("calendlyWidget"), prefill: {name: ${}, email: ${state.lead.email}} })`)

        head.appendChild(script)

        setCalendly(true)
        // script.innerHTML = `Calendly.initInlineWidget({
        //     url: 'https://calendly.com/mysoftwarescoutgmbh/crm-auswahlberatung?hide_event_type_details=1',
        //     parentElement: document.getElementById('calendlyWidget'),
        //     prefill: {}
        //     });`;
        // document.body.appendChild(script);
        // Hier später mit den daten aus dem Datenform prefillen
    }, []);

    useEffect(() => { 
        if(window.Calendly){
            console.log(window)
            window.Calendly.initInlineWidget({
                url: 'https://calendly.com/mysoftwarescoutgmbh/crm-auswahlberatung?hide_event_type_details=1',
                parentElement: document.getElementById('calendlyWidget'),
                prefill: {
                    name: 'JONge',
                    email: 'jo',
                }         
        });
    } 
}, [initCalendly])


function isCalendlyEvent(e) {
    return e.data.event &&
           e.data.event.indexOf('calendly') === 0;
  };
  

// const handler = React.useCallback(
//     ({ clientX, clientY }) => {
//       // Update coordinates
//       setCoords({ x: clientX, y: clientY });
//     },
//     [setCoords]
//   );
  // Add event listener using our hook
  useEventListener('message', 
  function(e) {
    if (isCalendlyEvent(e)) {
        if(e.data.event === 'calendly.event_scheduled'){
            dispatch({ type: 'UPDATE_STATE', payload: { showThankyouPage: true } })
        }
    }
  });

    
    return (
        <>
        <h2 className="questionHeadline calendlyHeadline">Termin für Ergebnispräsentation der passenden CRM-Systeme</h2>
        <h3 className="calendlySubheadline">Vereinbaren Sie einen Termin mit Ihrem persönlichen CRM-Berater</h3>
        <div className="calendly-inline-widget" id="calendlyWidget" data-url="https://calendly.com/mysoftwarescoutgmbh/crm-auswahlberatung?hide_event_type_details=1" style={{height: '800px'}} />

        </>
    );
}


