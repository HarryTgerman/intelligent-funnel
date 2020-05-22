import React from 'react'
import { Store } from '../../Context/Store';
import { Card, Collapse } from 'antd'
import Loading from './Loading';
import { imagePath } from '../../utils/assetUtils';


export default function Results() {

    const { state, dispatch } = React.useContext(Store)
    const [isLoading, setLoading] = React.useState(true)

    const [storedResults, setResults] = React.useState([])


    React.useEffect(() => {

        state.results.forEach(async (i, index) => {
            let intersections = {};
            let intersectionCount = 0;
            i.areasCount = i.useCase.length;
            for (let [key, value] of Object.entries(state.data)) {

                if (key === 'connections') {
                    const intersection = i[key].filter(k => -1 !== value.map(j => {
                        if (j.inputKey !== 'default') return j.inputKey;
                        else return j.value
                    }).indexOf(k))
                    intersections = { ...intersections, connections: intersection }
                    intersectionCount = intersectionCount + intersection.length
                }
                else if (key === 'numberOfSeats') {
                    if (i[key] <= value) {
                        intersectionCount = intersectionCount + 1
                        intersections = { ...intersections, numberOfSeats: value };
                    }
                }
                else if (key === 'budget') {
                    if (i[key].includes(value)){
                        intersectionCount = intersectionCount + 1
                         const diff = i[key].filter(j => j !== value).length
                         console.log(i.name, i[key], value)
                         console.log("alter wert", intersectionCount, "neur Wert", intersectionCount - diff, 'parameter', diff)

                         if(diff >= 1) intersectionCount = intersectionCount - diff
                         else intersectionCount = intersectionCount + 1
                         intersections = { ...intersections, [key]: value 
                        }
                } else {
                    intersectionCount = intersectionCount - i[key].length
                }
            }
                else if (Array.isArray(value) && i[key]) {
                    if(key === 'useCase') {
                        const found = i[key].every(ai => value.map(j => j.value).includes(ai));
                        if(found){
                            const intersection = i[key].filter(k => -1 !== value.map(j => j.value).indexOf(k))
                            intersections = { ...intersections, [key]: intersection }
                            intersectionCount = intersectionCount + 1 +  intersection.length
                        }
                        else {
                            
                            intersections = { ...intersections, [key]: i[key] }
                            intersectionCount = intersectionCount + (i[key].length - value.length)
                        }
                    }
                    else {
                        const intersection = i[key].filter(k => -1 !== value.map(j => j.value).indexOf(k))
                        intersections = { ...intersections, [key]: intersection }
                        intersectionCount = intersectionCount + intersection.length
                    }
                    //    const intersection =  i[key].filter(k => .includes(k))
   
                }
                else if (i[key] === value) {
                    intersectionCount = intersectionCount + 1
                     intersections = { ...intersections, [key]: value };
                }
            }
            let results = state.results
            results[index].result = intersections
            results[index].intersectionCount = intersectionCount
            await dispatch({ type: 'UPDATE_STATE', payload: { results } })
        })

        const timer = setTimeout(() => {
            setLoading(false);

        }, 3500);
        return () => clearTimeout(timer);

        // }
    }, [])

    React.useEffect(() => {
        
        let sortBy = (p, a) => a.sort((i, j) => p.map(v => i[v] - j[v]).find(r => r))
        let sorted = sortBy(['intersectionCount', 'areasCount'], state.results)

        sorted = sorted.reverse()
        let intersectionCount = sorted[0].intersectionCount
        sorted.map((i, index ) => {
            let count = intersectionCount - i.intersectionCount
            i.percentage = 100-((1+index+count)*3)
            return i
        } )
        setResults(sorted)
    }, [state.results])

    const { Panel } = Collapse;
    const matchScore = [
        Math.floor(Math.random() * (Math.floor(98) - Math.ceil(92) + 1)) + Math.ceil(92),
        Math.floor(Math.random() * (Math.floor(89) - Math.ceil(85) + 1)) + Math.ceil(85),
        Math.floor(Math.random() * (Math.floor(84) - Math.ceil(80) + 1)) + Math.ceil(80)
    ];


    return (
        <>
            {isLoading && <Loading />}
            {!isLoading && <div className="resultPage fade-in-right">
                <h2 className="questionHeadline">Ihre persönliche Top 3 aus 680 Anbietern</h2>
                <div className="trustUspWrapper">
                    <div className="trustUspItem">
                        <img src={imagePath('handshake.svg')} />
                        <p>Unabhängige Ergebnisse</p>
                    </div>
                    <div className="trustUspItem">
                        <img src={imagePath('empfehlungen.svg')} />
                        <p>Über 8.500 erfolgreiche Empfehlungen </p>
                    </div>
                    <div className="trustUspItem">
                        <img src={imagePath('free.svg')} />
                        <p>Kostenlose Testversionen</p>
                    </div>
                </div>
                <h3 className="resultSubheadline">Diese Anbieter erfüllen Ihre Anforderungen am besten:</h3>
                <div className="resultCardWrapper">
                    {storedResults.map((e, index) => ( index <= 2 && 
                        <div className="resultCard">
                           { e.discount && <img className="rabatt-badge" src={imagePath('rabatt-badge.png')} /> }
                            <div className="resultCard-header">
                                <div className="myMatchWrapper">
                                    <p className="myMatchScore"><span>{e.percentage}%</span> Übereinstimmung</p>
                                </div>
                                <div className="headInfo">
                                    <a target="_blank" className="ctaLink" href={e.url}><img src={imagePath(`${e.image}`)} /></a>
                                    <a target="_blank" className="ctaLink" href={e.url}><h4>{e.name}</h4></a>
                                    <a target="_blank" className="ctaLink" href={e.url}><img className="stars" src={imagePath('star-1.svg')} /></a>
                                    <a target="_blank" className="ctaLink" href={e.url}><p>{e.reviews} Bewertungen</p></a>
                                </div>

                            </div>
                            <div className="resultCard-body">
                                <div className="bodySection">
                                    {e.result.useCase &&
                                        <div className="resultCard-body-row">
                                            <div>
                                                <span>ANWENDUNGSBEREICH</span>
                                                <p>{e.result.useCase.join(', ')}</p>
                                            </div>
                                            <img src={imagePath('green-round-checkmark.svg')} />
                                        </div>
                                    }
                                    {e.result.industry || state.data.industry && 
                                        <div className="resultCard-body-row">
                                            <div>
                                                <span>BRANCHE</span>
                                                <p>{e.result.industry ? `${e.result.industry.join(', ')}` : `${state.data.industry}`}</p>
                                            </div>
                                            <img src={imagePath('green-round-checkmark.svg')} />
                                        </div>
                                    }
                                    <div className="resultCard-body-row">
                                        <div>
                                            <span>NUTZERANZAHL</span>
                                            <p>{`${e.result.numberOfSeats} Nutzer`}</p>
                                        </div>
                                        <img src={imagePath('green-round-checkmark.svg')} />
                                    </div>
                                    {e.result.budget &&
                                        <div className="resultCard-body-row">
                                            <div>
                                                <span>IHR BUDGET</span>
                                                <p>{`${e.result.budget}`}</p>
                                            </div>
                                            <img src={imagePath('green-round-checkmark.svg')} />
                                        </div>
                                    }
                                    {e.result.targetGroup && 
                                        <div className="resultCard-body-row">
                                            <div>
                                                <span>KUNDENBEZIEHUNGEN</span>
                                                <p>{e.result.targetGroup.join(', ')}</p>
                                            </div>
                                            <img src={imagePath('green-round-checkmark.svg')} />
                                        </div>
                                    }
                                    <div className="resultCard-body-row">
                                        <div>
                                            <span>DATENSPEICHERUNG</span>
                                            <p>DSGVO-Konform</p>
                                        </div>
                                        <img src={imagePath('green-round-checkmark.svg')} />
                                    </div>
                                    
                                    <a target="_blank" className="ctaLink vendorButton" href={e.url}><span>Zum Anbieter</span></a>
                                    <div className="ctaSection">
                                        <div>
                                            <img className="subCtaCheck" src={imagePath('green-round-checkmark.svg')} />
                                            <a target="_blank" className="ctaLink" href={e.url}><p className="subCtaText">Kostenlose Testversion</p></a>
                                        </div>
                                    </div>
                                </div>
                                <hr className="resultRudder" />
                                <Collapse className="resultCard-body-colapse" expandIconPosition="right" bordered={false} defaultActiveKey={['1', '2']}>
                                    <Panel className="collapsePanel" header="Funktionen" key="1">
                                        <p className="panelHeadline">Ihre Anforderungen:</p>
                                        {e.result.requiredFeatures && e.result.requiredFeatures.map(i => (
                                            <div className="resultCard-body-row">
                                                <p>{i}</p>
                                                <img src={imagePath('green-round-checkmark.svg')} />
                                            </div>
                                        ))}
                                        <a target="_blank" href={e.url} className="moreInfoCta ctaLink">Weitere Informationen</a>
                                    </Panel>
                                    <hr className="resultRudder" />

                                    <Panel className="collapsePanel" header={'Anbindungen'} key="2">
                                        <p className="panelHeadline">Ihre Anforderungen:</p>
                                        { e.result.connections && e.result.connections.map(i =>
                                            (
                                                <div className="resultCard-body-row">
                                                    <p>{i}</p>
                                                    <img src={imagePath('green-round-checkmark.svg')} />
                                                </div>)
                                        )}
                                        <a target="_blank" href={e.url} className="moreInfoCta ctaLink">Weitere Informationen</a>
                                    </Panel>
                                </Collapse>
                                <hr className="resultRudder" />
                                <div className="bodySection">
                                    <p className="bodySectionHeadline">Preis <br /> <span>{e.price}</span></p>
                                    <p className="priceInfo">pro Nutzer und Monat</p>
                                    <a target="_blank" className="ctaLink vendorButton" href={e.url}><span>Zum Anbieter</span></a>
                                    <div className="ctaSection">
                                        <div>
                                            <img className="subCtaCheck" src={imagePath('green-round-checkmark.svg')} />
                                            <a target="_blank" className="ctaLink" href={e.url}><p className="subCtaText">Kostenlose Testversion</p></a>
                                        </div>
                                    </div>

                                </div>


                            </div>

                        </div>
                    ))}

                </div>
            </div>

            }
        </>
    )
}
