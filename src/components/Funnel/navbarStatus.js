import React from 'react';
import { Store } from '../../Context/Store';


export default function NavbarStatus() {
    const { state, dispatch } = React.useContext(Store);
    
    const currentAreaIndex = () => {
        
        if(state.currentArea == 'conditionsArea'){
            return 0;
        }else if (state.currentArea == 'applicationArea'){
            return 1;
        }else if (state.currentArea == 'projectArea'){
            return 2;
        }else if (state.currentArea == 'formArea'){
            return 3;
        }else if (state.currentArea == 'calendlyArea'){
            return 4;
        }
    }

    
    return (
        <ul className="progressList">
              <li className={(currentAreaIndex() == 0) ? 'progressListItem progressListItemActive' : (currentAreaIndex() > 0) ? 'progressListItem progressListItemDone' : 'progressListItem'}>Anforderungen</li>
              <li className={(currentAreaIndex() == 1) ? 'progressListItem progressListItemActive' : (currentAreaIndex() > 1) ? 'progressListItem progressListItemDone' : 'progressListItem'}>Einsatzbereich</li>
              <li className={(currentAreaIndex() == 2) ? 'progressListItem progressListItemActive' : (currentAreaIndex() > 2) ? 'progressListItem progressListItemDone' : 'progressListItem'}>Projekt</li>
              <li className={(currentAreaIndex() == 3) ? 'progressListItem progressListItemActive' : (currentAreaIndex() > 3) ? 'progressListItem progressListItemDone' : 'progressListItem'}>Kontaktinformationen</li>
              <li className={(currentAreaIndex() == 4) ? 'progressListItem progressListItemActive' : (currentAreaIndex() > 4) ? 'progressListItem progressListItemDone' : 'progressListItem'}>Termin Ergebnispräsentation</li>
        </ul>
    ) 
}