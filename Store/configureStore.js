import { createStore } from 'redux';
import setEventId from './Reducers/eventIdReducer'
import addEvent from './Reducers/addEventReducer'
import { persistCombineReducers } from 'redux-persist' //permet de définir plusieurs reducers dans notre application et de les persister.
import AsyncStorage from '@react-native-community/async-storage'



const rootPersistConfig = { //défini des paramètres obligatoires pour la configuration de la persistance du state global
  key: 'root', //key: permet à la librairie d'identifier de manière unique votre store persisté.
  storage: AsyncStorage //storage: correspond au type de stockage.
}
export default createStore(persistCombineReducers(rootPersistConfig, {setEventId, addEvent}))
