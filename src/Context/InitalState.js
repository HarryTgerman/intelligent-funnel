import { vendors } from './Vendordata';

const anbieterArray = [{ text: 'Salesforce' }, { text: 'Microsoft-Dynamics' }, { text: 'ZOHO-CRM' }, { text: 'ACT! CRM' }, { text: 'SAP-CRM' }, { text: 'SuperOffice' }, { text: 'HubSpot' }, { text: 'Andere', icon: `Andere`, additional: true, label: 'Welchen Anbieter verwenden Sie?*', placeholder: 'z.B. Pipedrive' }];
const reasonSoftwareChange = [{ text: 'Zu teuer' }, { text: 'Zu unmodern' }, { text: 'Funktionen fehlen' }, { text: 'Andere', icon: `Andere`, additional: true, label: 'Was sind Ihre Wechselgründe?*', placeholder: 'z.B. fehlende Anbindungen' }];
const boolanArray = [{ text: 'Ja', icon: `Checkmark`, value: true }, { text: 'Nein', icon: `Cross`, value: false }];
const serverInDeutschland = [{ text: 'Ja', icon: `Checkmark`, value: true }, { text: 'Nein', icon: `Cross`, value: false }, { text: 'Ich bin offen', icon: `Offen`, value: true }]
const crmReplaceArray = [{ text: 'Outlook', icon: `` }, { text: 'Papier', icon: `` }, { text: 'Excel', icon: `` }, { text: 'Interne Datenbank', icon: `` }, { text: 'Andere', icon: `Andere`, additional: true, label: 'Geben Sie Ihre aktuelle Alternative an*', placeholder: 'z.B. Karteikarten' }]
// const targetGroupArray = ['Geschäftskunden', '', 'Lieferanten/Partner', 'Privatkunden' ]
// const targetGroupArray = [{ text: 'Geschäftskunden', value: 'B2B', icon: `Geschäftskunden` }, { text: 'Privatkunden', value: "B2C", icon: `Privatkunden` }, { text: 'Öffentlicher Sektor', value: 'publicSector', icon: 'PublicSector' }, { text: 'Partner/Lieferanten', value: 'supplier', icon: 'Partner' }, { text: 'Andere', icon: `Andere`, additional: true, label: 'Geben Sie Ihre Kundengruppe an*', placeholder: 'z.B. Investoren' }]
const targetGroupArray = [{ text: 'Geschäftskunden', value: 'Geschäftskunden', icon: `Geschäftskunden` }, { text: 'Privatkunden', value: "Privatkunden", icon: `Privatkunden` }, { text: 'Öffentlicher Sektor', value: 'Öffentlicher Sektor', icon: 'PublicSector' }, { text: 'Partner/Lieferanten', value: 'Partner/Lieferanten', icon: 'Partner' }, { text: 'Andere', icon: `Andere`, additional: true, label: 'Geben Sie Ihre Kundengruppe an*', placeholder: 'z.B. Investoren' }]

const crmAreas = [{ text: 'Vertrieb', icon: `Vertrieb` }, { text: 'Marketing', icon: `Marketing` }, { text: 'Service', icon: `Service` }, { text: 'Andere', icon: `Andere`, additional: true, label: 'Geben Sie den geplanten Anwendungsbreich an*', placeholder: 'z.B. Datenanalyse' }]
const hosting = [{ text: 'Cloud', icon: 'Cloud', value: 'Cloud' }, { text: 'Private Cloud', icon: 'PrivateCloud', value: 'Private Cloud' }, { text: 'Lokal', icon: `Lokal`, value: 'Lokal' }, { text: 'Ich bin offen', value: 'Kunde ist offen', icon: `Offen` }];
const industry = [{ text: 'Dienstleistung', icon: 'Dienstleistung', value: 'Dienstleistung' }, { text: 'Handel', icon: 'Handel', value: "Handel" }, { text: 'Fertigung', icon: 'Fertigung', value: 'Fertigung' }, { text: 'Bildung', icon: `Bildung`, value: "Bildung" }, { text: 'Andere', value: 'Andere', icon: 'Andere', additional: true, label: 'In welcher Branche sind Sie tätig?*', placeholder: 'z.B. Landwirtschaft' }]
const level = [{ text: 'Regional', icon: '' }, { text: 'National', icon: '' }, { text: 'International', icon: '' }]
const employees = [{ text: '1-9', subline: 'Mitarbeiter' }, { text: '10-29', subline: 'Mitarbeiter' }, { text: '30-49', subline: 'Mitarbeiter' }, { text: '50-69', subline: 'Mitarbeiter' }, { text: '70-89', subline: 'Mitarbeiter' }, { text: '90+', subline: 'Mitarbeiter' }]
const integrationTime = [{ text: 'Sofort' }, { text: 'In 1-2 Monaten' }, { text: 'In 3-4 Monaten' }, { text: 'In 5-6 Monaten' }, { text: 'In 7-8 Monaten' }, { text: 'In mehr als 9 Monaten' }]

export const connections = [
  {
    value: {
      text: 'E-Mail-Anbindung',
      question: 'Welcher E-Mail-Anbieter soll angebunden werden?',
      inputKey: 'email',
      value: '',
      placeholder: 'z.B. Outlook, G-Mail',
      icon: `EmailAnbindung`
    },
    tags: ['Geschäftskunden', 'Privatkunden', 'Öffentlicher Sektor', 'Partner/Lieferanten', 'Vertrieb' ,'Marketing','Service','Andere']
  },
  {
    value: {
      text: 'ERP-System',
      question: 'Welcher ERP-Anbieter soll angebunden werden?',
      inputKey: 'erp',
      value: '',
      icon: `ERP`
    },
    tags: ['Geschäftskunden', 'Privatkunden', 'Öffentlicher Sektor', 'Partner/Lieferanten', 'Vertrieb' ,'Marketing','Service','Andere']
  },
  {
    value: {
      text: 'Telefonanlage',
      question: 'Welche Telefonanlage soll angebunden werden?',
      inputKey: 'telephoneSystem',
      value: '',
      icon: `Telefonanlage`
    },
    tags: ['Geschäftskunden', 'Privatkunden', 'Öffentlicher Sektor', 'Partner/Lieferanten', 'Vertrieb' ,'Marketing','Service','Andere']
  },
  // {
  //     value: {
  //       text: 'E-Mail-Anbindung',
  //       inputKey: 'default',
  //       value: 'E-Mail-Anbindung',
  //       icon: `EmailAnbindung`
  //     },
  //     tags: ['Geschäftskunden', 'Privatkunden', 'Öffentlicher Sektor', 'Partner/Lieferanten', 'Vertrieb' ,'Marketing','Service','Andere']
  //   },
  //   {
  //     value: {
  //       text: 'ERP-System',
  //       inputKey: 'default',
  //       value: 'ERP-System',
  //       icon: `ERP`
  //     },
  //     tags: ['Geschäftskunden', 'Privatkunden', 'Öffentlicher Sektor', 'Partner/Lieferanten', 'Vertrieb' ,'Marketing','Service','Andere']
  //   },
  //   {
  //     value: {
  //       text: 'Telefonanlage',
  //       inputKey: 'default',
  //       value: 'Telefonanlage',
  //       icon: `Telefonanlage`
  //     },
  //     tags: ['Geschäftskunden', 'Privatkunden', 'Öffentlicher Sektor', 'Partner/Lieferanten', 'Vertrieb' ,'Marketing','Service','Andere']
  //   },
  {
    value: { text: 'Kalender', value: 'Kalender', inputKey: 'default', icon: 'Kalender' },
    tags: ['Geschäftskunden', 'Privatkunden', 'Öffentlicher Sektor', 'Partner/Lieferanten', 'Vertrieb' ,'Marketing','Service','Andere']
  },
  {
    value: { value: 'Offene Schnittstelle', text: 'Offene Schnittstelle', inputKey: 'default', icon: 'Schnittstelle' },
    tags: ['Geschäftskunden', 'Privatkunden', 'Öffentlicher Sektor', 'Partner/Lieferanten', 'Vertrieb' ,'Marketing','Service','Andere']
  },
  {
    value: { value: 'DATEV', text: 'DATEV', inputKey: 'default', icon: 'DATEV' },
    tags: ['Geschäftskunden', 'Privatkunden', 'Öffentlicher Sektor', 'Partner/Lieferanten', 'Vertrieb' ,'Marketing','Service','Andere']
  },
  {
    value: { value: 'Newsletter Anbieter', text: 'Newsletter Anbieter', inputKey: 'default', icon: 'NewsletterAnbieter' },
    tags: ['Geschäftskunden', 'Privatkunden', 'Öffentlicher Sektor', 'Partner/Lieferanten', 'Vertrieb' ,'Marketing','Service','Andere']
  },
  {
    value: { value: 'Social Media', text: 'Social Media', inputKey: 'default', icon: 'SocialMedia' },
    tags: ['Geschäftskunden', 'Privatkunden', 'Öffentlicher Sektor', 'Partner/Lieferanten', 'Vertrieb' ,'Marketing','Service','Andere']
  },
  {
    value: { value: 'Andere', text: 'Andere', icon: `Andere`, inputKey: 'default', additional: true, placeholder: 'z.B. Datev-Anbindung' },
    tags: ['Geschäftskunden', 'Privatkunden', 'Öffentlicher Sektor', 'Partner/Lieferanten', 'Vertrieb' ,'Marketing','Service','Andere']
  }

]

export const features = [
  {
    value: { text: 'Rechnungsstellung', icon: `Rechnungsstellung` },
    tags: ['Geschäftskunden', 'Privatkunden', 'Öffentlicher Sektor','Vertrieb' ,'Marketing','Andere']
  },
  {
    value: { text: 'Pipelineübersicht', icon: `Pipelineübersicht` },
    tags: ['Geschäftskunden', 'Privatkunden', 'Öffentlicher Sektor', 'Partner/Lieferanten', 'Vertrieb','Service','Andere']
  },
  {
    value: { text: 'Abbildung Nachfassprozess', icon: `Nachfassprozess` },
    tags: ['Geschäftskunden', 'Privatkunden', 'Öffentlicher Sektor', 'Partner/Lieferanten', 'Vertrieb', 'Andere']
  },
  {
    value: { text: 'Mobil abrufbar', icon: `Mobil` },
    tags: ['Geschäftskunden', 'Privatkunden', 'Öffentlicher Sektor', 'Partner/Lieferanten', 'Vertrieb' ,'Marketing','Service','Andere']
  },
  {
    value: { text: 'Tourenplannung & Besuchsberichte', icon: `Tourenplannung` },
    tags: ['Geschäftskunden', 'Privatkunden', 'Öffentlicher Sektor', 'Partner/Lieferanten', 'Vertrieb','Service','Andere']
  },
  {
    value: { text: 'Berichterstattung', icon: `Berichterstattung` },
    tags: ['Geschäftskunden','Partner/Lieferanten', 'Vertrieb','Andere']
  },
  {
    value: { text: 'Webformulare', icon: `Webformulare` },
    tags: ['Geschäftskunden', 'Privatkunden','Vertrieb' ,'Marketing','Service','Andere']
  },
  {
    value: { text: 'E-Mail Automatisierung', icon: `EMail` },
    tags: ['Geschäftskunden', 'Privatkunden', 'Öffentlicher Sektor', 'Partner/Lieferanten', 'Vertrieb' ,'Marketing','Service','Andere']
  },
  {
    value: { text: 'Kundensegmentierung', icon: `Kundensegmentierung` },
    tags: ['Geschäftskunden', 'Privatkunden', 'Vertrieb' ,'Marketing','Andere']
  },
  {
    value: { text: 'Kampangenauswertung', icon: `Kampangenauswertung` },
    tags: ['Geschäftskunden', 'Privatkunden', 'Öffentlicher Sektor','Marketing','Andere']
  },
  {
    value: { text: 'Newsletter', icon: `Newsletter` },
    tags: ['Geschäftskunden', 'Privatkunden', 'Öffentlicher Sektor', 'Partner/Lieferanten', 'Vertrieb' ,'Marketing','Andere']
  },
  {
    value: { text: 'Email Tracking', icon: `EmailTracking` },
    tags: ['Geschäftskunden', 'Privatkunden', 'Öffentlicher Sektor', 'Partner/Lieferanten', 'Vertrieb' ,'Marketing','Service','Andere']
  },
  {
    value: { text: 'Ticketsystem', icon: `Ticketsystem` },
    tags: ['Geschäftskunden', 'Privatkunden', 'Öffentlicher Sektor', 'Partner/Lieferanten','Service','Andere']
  },
  {
    value: { text: 'Filterfunktion', icon: `Filterfunktion` },
    tags: ['Geschäftskunden', 'Privatkunden', 'Öffentlicher Sektor', 'Partner/Lieferanten', 'Vertrieb' ,'Marketing','Service','Andere']
  },
  {
    value: { text: 'Kontaktmanagement', icon: `Kontaktmanagment` },
    tags: ['Geschäftskunden', 'Privatkunden', 'Öffentlicher Sektor', 'Partner/Lieferanten', 'Vertrieb' ,'Marketing','Service','Andere']
  },
  {
    value: { text: 'Workflowautomatisierung', icon: `Workflowautomatisierung` },
    tags: ['Geschäftskunden', 'Privatkunden', 'Öffentlicher Sektor', 'Partner/Lieferanten', 'Vertrieb' ,'Marketing','Service','Andere']
  },
  {
    value: { value: 'Andere', text: 'Andere', icon: `Andere`, additional: true, placeholder: 'Geben Sie weitere Funktionen an...' },
    tags: ['Geschäftskunden', 'Privatkunden', 'Öffentlicher Sektor', 'Partner/Lieferanten', 'Vertrieb' ,'Marketing','Service','Andere']
  }
]


export const cardmaker = (pathToArea, pathToQuestion, arr, payloadKey, parentId) => {
  return arr.map(i => {
    return {
      id: `${parentId}-${i.text}`,
      pathToArea: pathToArea,
      parentId,
      pathToQuestion: pathToQuestion,
      active: false,
      value: { value: i.value ? i.value : i.text, text: i.text },
      text: `${i.text}`,
      icon: i.icon,
      subline: i.subline ? i.subline : false,
      payloadKey,
      additional: i.additional,
      label: i.label,
      placeholder: i.placeholder
    }
  })
}

 
export const dynamicFeatures = (requirementArray) => {
 
  let arr = []
  features.forEach(feature => {
    const found = requirementArray.every(ai => feature.tags.includes(ai));
    if (found) arr.push(feature.value)
    // if(requirementArrayA.forEach(i => feature.tags.includes(i)) && requirementArrayB.forEach(j => feature.tags.includes(j)))
  })

  if(arr.length < 2) {
    const defaultFeatures = ['E-Mail Automatisierung', 'Mobil abrufbar', 'Tourenplannung & Besuchsberichte', 'Webformulare', 'Rechnungsstellung', 'Andere' ]
    let defaultArr = features.filter(feature => defaultFeatures.includes(feature.value.text)).map(i => i.value)
    arr = [ ...arr, ...defaultArr ]
  }
  return cardmaker('conditionsArea', 'welche-anbindungen-werden-benötigt', arr, 'requiredFeatures', 'welche-features-sind-benötigt')

}


export const dynamicConnection = (requirementArray) => {
 
  let arr = []
  connections.forEach(connection => {
    const found = requirementArray.every(ai => connection.tags.includes(ai));
    if (found) arr.push(connection.value)
    // if(requirementArrayA.forEach(i => feature.tags.includes(i)) && requirementArrayB.forEach(j => feature.tags.includes(j)))
  })

  if(arr.length < 2) {
    const defaultConnections = ['Telefonanlage', 'ERP-System', 'Social Media', 'E-Mail-Anbindung', 'Andere' ]
    let defaultArr = connections.filter(connection => defaultConnections.includes(connection.value.text)).map(i => i.value)
    arr = [ ...arr, ...defaultArr ]
  }
  let cards = cardmaker('conditionsArea', 'welches-hosting-modell', arr, 'connections', 'welche-anbindungen-werden-benötigt')
    // let cards = cardmaker('conditionsArea', 'müssen-die-server-in-eu-stehen', arr, 'connections', 'welche-anbindungen-werden-benötigt');
  cards.map((i, index) => {
    i.value = connections.find( j => i.text === j.value.text ).value
  })
  return cards
}

export const initalState = {
    showThankyouPage: false,
    currentQuestionIndex: 0,
    lead: {
      email: '',
      phone: 0,
      name: '',
      company: '',
      consent: false,
      additionalInfo: '',
      numberOfEmployees: 0,
      numberOfSeats: 0,
      industry: '',
      funnel: [],
      productCategory: '',
      utm: '',
      gaClientId: 0
    },
    results: vendors,
    currentArea: 'conditionsArea',
    questions: [
      {
        id: 'benutzen-sie-bereits-ein-crm-system',
        question: 'Benutzen sie bereits ein CRM-System?',
        cards: [{
          text: 'Ja',
          // Id der Kachel, die sich aus der Parent Id und dem value der Kachel ergiebt
          id: 'benutzen-sie-bereits-ein-crm-system-true',
          // >>>>>> Payload, der bei Lead Kreation in Datenbank geschrieben wird. WICHTIG, falls frage schonmal vorhanden im Dashboard, bitte nach passendem Key im Leadschema suchen, 
          payload: { softwareInUse: true },
          // key in areas Object, in welchem sich nächste Frage befindet
          pathToArea: 'conditionsArea',
          // Id der Frage die als nächstes angezeigt werden soll
          pathToQuestion: 'welchen-anbieter-nutzen-sie-aktuell',
          // Status der Kachel
          active: false,
          // value
          value: { value: true },
          icon: `Checkmark`,
          multiselect: false,
          payloadKey: 'softwareInUse',
        },
        {
          id: 'benutzen-sie-bereits-ein-crm-system-false',
          text: 'Nein',
          payload: { softwareInUse: false },
          pathToArea: 'conditionsArea',
          pathToQuestion: 'was-ersetzt-aktuell-ein-crm-system-bei-ihnen',
          active: false,
          icon: `Cross`,
          value: { value: false },
          multiselect: false,
          payloadKey: 'softwareInUse'
        }
        ]
      }
    ],
    history: [],
    areas: {
      conditionsArea: [
        // Id der Frage
        {
          id: 'benutzen-sie-bereits-ein-crm-system',
          question: 'Benutzen sie bereits ein CRM-System?',
          cards: [{
            text: 'Ja',
            // Id der Kachel, die sich aus der Parent Id und dem value der Kachel ergiebt
            id: 'benutzen-sie-bereits-ein-crm-system-true',
            // >>>>>> Payload, der bei Lead Kreation in Datenbank geschrieben wird. WICHTIG, falls frage schonmal vorhanden im Dashboard, bitte nach passendem Key im Leadschema suchen, 
            payload: { softwareInUse: true },
            // key in areas Object, in welchem sich nächste Frage befindet
            pathToArea: 'conditionsArea',
            // Id der Frage die als nächstes angezeigt werden soll
            pathToQuestion: 'welchen-anbieter-nutzen-sie-aktuell',
            // Status der Kachel
            active: false,
            // value
            value: true,
            icon: `Checkmark`,
            multiselect: false,
            buttonDisabled: true,
            payloadKey: 'softwareInUse',
          },
          {
            id: 'benutzen-sie-bereits-ein-crm-system-false',
            text: 'Nein',
            payload: { softwareInUse: false },
            pathToArea: 'conditionsArea',
            pathToQuestion: 'was-ersetzt-aktuell-ein-crm-system-bei-ihnen',
            active: false,
            icon: `Cross`,
            value: false,
            multiselect: false,
            buttonDisabled: true,
            payloadKey: 'softwareInUse'
          }
          ]
        },
        {
          id: 'welchen-anbieter-nutzen-sie-aktuell',
          question: 'Welchen Anbieter nutzen Sie aktuell?',
          multiselect: false,
          buttonDisabled: true,
          cards: cardmaker('conditionsArea', 'was-sind-die-gründe-für-den-wechsel', anbieterArray, 'currentSoftwareInUse', 'welchen-anbieter-nutzen-sie-aktuell')
        },
        {
          id: 'was-sind-die-gründe-für-den-wechsel',
          question: 'Was sind Gründe für den Wechsel?',
          multiselect: true,
          buttonDisabled: false,
          cards: cardmaker('conditionsArea', 'sollen-die-daten-in-das-neue-crm-importiert-werden', reasonSoftwareChange, 'reasonSoftwareChange', 'was-sind-die-gründe-für-den-wechsel')
        },
        {
          id: 'sollen-die-daten-in-das-neue-crm-importiert-werden',
          question: 'Sollen Daten in das neue CRM-System importiert werden?',
          multiselect: false,
          buttonDisabled: true,
          info: { title: 'Import', content: 'Sollen Daten aus Ihrem alten CRM-System in die neue Software importiert werden? Wenden Sie Sich bei Unklarheit gerne kostenlos telefonisch oder per Chat an uns.' },
          cards: cardmaker('conditionsArea', 'welche-bereiche-sollen-mit-dem-crm-system-abgedeckt-werden', boolanArray, 'dataImport', 'sollen-die-daten-in-das-neue-crm-importiert-werdenl')
        },
        {
          id: 'was-ersetzt-aktuell-ein-crm-system-bei-ihnen',
          question: 'Was ersetzt aktuell ein CRM-System bei Ihnen?',
          multiselect: true,
          buttonDisabled: false,
          cards: cardmaker('conditionsArea', 'welche-bereiche-sollen-mit-dem-crm-system-abgedeckt-werden', crmReplaceArray, 'currentSolution', 'was-ersetzt-aktuell-ein-crm-system-bei-ihnen')
        },
        {
          id: 'welche-bereiche-sollen-mit-dem-crm-system-abgedeckt-werden',
          question: 'Welche Bereiche sollen mit dem CRM-System abdgedeckt werden?',
          info: { title: 'CRM-Bereiche', content: 'Ein CRM-System kann für die Kontaktpflege verschiedener Bereiche eingesetzt werden. Beispielsweise zur Neukundenaquise im Vertrieb oder zur Serviceanfragen-Bearbeitung im Kundendienst. Wenden Sie Sich bei Unklarheit gerne kostenlos telefonisch oder per Chat an uns.' },
          multiselect: true,
          buttonDisabled: false,
          cards: cardmaker('conditionsArea', 'welche-art-von-kundenbeziehungen-sollen-gemanaged-werden', crmAreas, 'useCase', 'welche-bereiche-sollen-mit-dem-crm-system-abgedeckt-werden')
        },
        {
          id: 'welche-art-von-kundenbeziehungen-sollen-gemanaged-werden',
          question: 'Welche Kundenbeziehungen möchten Sie verwalten?',
          info: { title: 'Kundenbeziehungen', content: 'Welche Art von Kontakten möchten Sie in Ihrem CRM-System verwalten? CRM-Systeme eignen sich zur Verwaltung von normalen Privatkunden als auch von Lieferanten. Wenden Sie Sich bei Unklarheit gerne kostenlos telefonisch oder per Chat an uns.' },
          multiselect: true,
          buttonDisabled: false,
          cards: cardmaker('conditionsArea', 'welche-features-sind-benötigt', targetGroupArray, 'targetGroup', 'welche-art-von-kundenbeziehungen-sollen-gemanaged-werden')
        },
        {
          id: 'welche-features-sind-benötigt',
          question: 'Welche Funktionen muss Ihr CRM-System beinhalten?',
          multiselect: true,
          buttonDisabled: false,
          info: { title: 'Funktionen', content: 'Die Auswahl der Funktionen hängt stark vom Einsatzbereich des CRM-Systems ab. Bitte wählen Sie Funktionen aus, die Sie unbedingt benötigen. Wenn Sie Sich noch nicht sicher sind welche Funktionen wichtig für Sie sind, wenden Sie Sich gerne kostenlos telefonisch oder per Chat an uns - wir helfen Ihnen weite' },
          skippable: { nextQuestion: 'welche-anbindungen-werden-benötigt', pathToArea: 'conditionsArea', content: 'Ich weiß es nicht' },
          cards: dynamicFeatures(['Vertrieb', 'B2B'])
        },
        {
          id: 'welche-anbindungen-werden-benötigt',
          question: 'Welche anderen Softwarelösungen möchten Sie an das CRM-System anbinden?',
          info: { title: 'Anbindungen', content: 'Viele Unternehmen haben noch weitere Softwarelösungen im Einsatz, die ggf. an das CRM-System angebunden werden müssen. Wir schlagen Ihnen nur CRM-Systeme vor, dir bereits eine bestehende Anbindung an Ihre Softwarelösungen besitzen. Wenden Sie Sich bei Unklarheit über Ihre benötigten Anbindungen gerne kostenlos telefonisch oder per Chat an uns.' },
          multiselect: true,
          buttonDisabled: false,
          // skippable: { nextQuestion: 'müssen-die-server-in-eu-stehen', pathToArea: 'conditionsArea', content: 'Ich weiß es nicht' },
          skippable: { nextQuestion: 'müssen-die-server-in-deutschland-stehen', pathToArea: 'conditionsArea', content: 'Ich weiß es nicht' },
  
          cards: dynamicConnection(['Vertrieb', 'B2B']),
        },
        {
          id: 'welches-hosting-modell',
          question: 'Welches Hosting-Modell soll die Software haben?',
          multiselect: false,
          buttonDisabled: true,
          info: { title: 'Hosting', content: 'Bei einer Cloud-Software liegen Ihre Daten auf den Servern des Anbieters und die Software wird monatlich pro Nutzer gezahlt. Sie müssen Sich dafür nicht um Serverinfrastruktur oder Updates kümmern. Bei einer lokalen Lösung wird die Software (als auch Ihre Daten) auf Ihren eigenen Servern gehostet. Dadurch fällt zu Beginn eine höhere Investitionssumme an, der Betrieb ist jedoch günstiger. Um Updates müssen Sie Sich selbst kümmern. Wenn Sie bereits bestehende Server und eine IT-Abteilung haben, empfehlen wir Ihnen eine lokale Lösung. In jedem anderen Fall empfehlen wir eine Cloud (oder private Cloud) Lösung. Wenden Sie Sich bei Unsicherheit gerne kostenlos telefonisch oder per Chat an uns.' },
          skippable: { nextQuestion: 'müssen-die-server-in-deutschland-stehen', pathToArea: 'conditionsArea', content: 'Ich weiß es nicht' },
          cards: cardmaker('conditionsArea', 'müssen-die-server-in-deutschland-stehen', hosting, 'hostingModel', 'welches-hosting-modell')
        },
        {
          id: 'müssen-die-server-in-deutschland-stehen',
          question: 'Sollen die Daten auf Servern in Deutschland gespeichert sein?',
          multiselect: false,
          buttonDisabled: true,
          cards: cardmaker('applicationArea', 'in-welcher-branche-tätig', serverInDeutschland, 'hostingInGermany', 'müssen-die-server-in-deutschland-stehen')
        },
        {
          id: 'müssen-die-server-in-eu-stehen',
          question: 'Sollen die Daten auf Servern innerhalb der EU gespeichert werden?',
          multiselect: false,
          buttonDisabled: true,
          cards: cardmaker('applicationArea', 'in-welcher-branche-tätig', serverInDeutschland, 'hostingInEU', 'müssen-die-server-in-eu-stehen')
        },
      ],
      applicationArea: [
        {
          id: 'in-welcher-branche-tätig',
          question: 'In welcher Branche ist Ihr Unternehmen tätig?',
          multiselect: false,
          buttonDisabled: false,
          // cards: cardmaker('applicationArea', 'wie-viele-nutzer', industry, 'industry', 'in-welcher-branche-tätig')
          cards: cardmaker('applicationArea', 'auf-welcher-ebene-soll-crm-eingesetzt-werden', industry, 'industry', 'in-welcher-branche-tätig')
        },
        {
          id: 'auf-welcher-ebene-soll-crm-eingesetzt-werden',
          question: 'Auf welcher Ebene soll das CRM-System eingesetzt werden?',
          multiselect: false,
          buttonDisabled: true,
          cards: cardmaker('applicationArea', 'wie-viele-nutzer', level, 'level', 'in-welcher-branche-tätig')
        },
        {
          id: 'wie-viele-nutzer',
          question: 'Wie viele Nutzer werden bei der Einführung mit dem CRM-System arbeiten?',
          multiselect: false,
          buttonDisabled: false,
          info: { title: 'Nutzeranzahl', content: 'Die Systeme von Anbietern sind für verschiedene Nutzerzahlen ausgelegt. Um Ihnen bestmögliche Empfehlungen geben zu können, geben Sie daher Ihre ungefähre Nutzerzahl an. Wenden Sie Sich bei Unklarheit gerne kostenlos telefonisch oder per Chat an ' },
          cards: [{ pathToQuestion: 'wie-viele-mitarbeiter-im-unternehmen', active: true, pathToArea: 'applicationArea',   payloadKey: 'numberOfSeats', value: { value: true, text: true} }]
        },
        {
          id: 'wie-viele-mitarbeiter-im-unternehmen',
          question: 'Wie viele Mitarbeiter beschäftigt Ihr Unternehmen ungefähr?',
          multiselect: false,
          buttonDisabled: true,
          cards: cardmaker('projectArea', 'projektbudget-festgelegt', employees, 'numberOfEmployees', 'wie-viele-mitarbeiter-im-unternehmen')
        },
      ],
      projectArea: [
        {
          id: 'projektbudget-festgelegt',
          question: 'Haben Sie bereits ein Budgetrahmen für das Projekt?',
          multiselect: false,
          buttonDisabled: true,
            // cards: [{
            //   text: 'Ja',
            //   id: 'projektbudget-festgelegt-true',
            //   payload: { softwareInUse: true },
            //   pathToArea: 'projectArea',
            //   pathToQuestion: 'hoehe-projektbudget',
            //   active: false,
            //   value: { value: true },
            //   icon: `Checkmark`,
            //   multiselect: false,
            //   payloadKey: 'budgetDefined',
            // },
            // {
            //   id: 'projektbudget-festgelegt-false',
            //   text: 'Nein',
            //   payload: { softwareInUse: false },
            //   pathToArea: 'projectArea',
            //   pathToQuestion: 'wann-einführung-geplant',
            //   active: false,
            //   icon: `Cross`,
            //   value: { value: false },
            //   multiselect: false,
            //   payloadKey: 'budgetDefined',
            // }
            // ]
          cards: cardmaker('projectArea', 'hoehe-projektbudget', boolanArray, 'budgetDefined', 'projektbudget-festgelegt')
        },
        {
          id: 'hoehe-projektbudget',
          question: 'In welchem Rahmen bewegt sich Ihr Projektbudget?',
          multiselect: false,
          buttonDisabled: true,
          info: { title: 'Budget', content: 'Damit wir Ihnen ausschließlich CRM-Systeme innerhalb Ihres Projektbudges empfehlen, geben Sie bitte Ihren ungefähren Budgetrahmen an. Wenden Sie Sich bei Unklarheit gerne kostenlos telefonisch oder per Chat an uns.' },
          skippable: { nextQuestion: 'wann-einführung-geplant', pathToArea: 'projectArea', content: 'Überspringen' },
          cards: cardmaker('projectArea', 'wann-einführung-geplant', [{ text: '10-50€', subline: 'Pro Nutzer/ Monat' }, { text: '50-120€',  subline: 'Pro Nutzer/ Monat' }, { text: '>120€',  subline: 'Pro Nutzer/ Monat' }], 'budget', 'hoehe-projektbudget')
        },
        {
          id: 'wann-einführung-geplant',
          question: 'Wann ist die Einführung des CRM-Systems geplant?',
          multiselect: false,
          buttonDisabled: true,
          // cards: cardmaker('resultsArea', 'result-page', integrationTime, 'integrationTime', 'wann-einführung-geplant')
          cards: cardmaker('projectArea', 'gibt-es-noch-etwas-zu-berücksichtigen', integrationTime, 'integrationTime', 'wann-einführung-geplant')
        },
        {
          id: 'gibt-es-noch-etwas-zu-berücksichtigen',
          question: 'Gibt es noch etwas, das wir bei der Auswahl berücksichtigen sollen?',
          // skippable: { nextQuestion: 'result-page', pathToArea: 'resultsArea', content: 'Überspringen' },
          skippable: { nextQuestion: 'contact-form', pathToArea: 'formArea', content: 'Überspringen' },
          multiselect: false,
          buttonDisabled: false,
          // cards: [{ pathToArea: 'resultsArea', pathToQuestion: 'result-page', active: true }],
          cards: [{ pathToArea: 'formArea', pathToQuestion: 'contact-form', active: true }],
        },
      ],
      // resultsArea: [
      //   {
      //     id: 'result-page',
      //     skippable: { nextQuestion: 'calendly-form', pathToArea: 'calendlyArea', content: 'Überspringen' },
      //     cards: [{ pathToArea: 'calendlyArea', pathToQuestion: 'calendly-form', active: true }]
      //   },
      // ],
  
      formArea: [
        {
          id: 'contact-form',
          skippable: { nextQuestion: 'calendly-form', pathToArea: 'calendlyArea', content: 'Überspringen' },
          cards: [{ pathToArea: 'calendlyArea', pathToQuestion: 'calendly-form', active: true }]
        },
      ],
      calendlyArea: [
        {
          id: 'calendly-form',
          skippable: { nextQuestion: 'calendly-form', pathToArea: 'calendlyArea', content: 'Überspringen' },
          cards: [{ pathToArea: 'calendlyArea', pathToQuestion: 'contact-form-success', active: true }]
        }
      ]
    },
    data: {
      numberOfSeats: 1
    }
  };

 
