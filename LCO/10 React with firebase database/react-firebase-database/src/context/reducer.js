import {
  SET_CONTACT,
  SET_LOADING,
  CONTACT_TO_UPDATE,
  SET_SINGLE_CONTACT,
} from "./action";

const reducer = (state, action) =>{
    switch(action.type){
        case SET_CONTACT:   //if information coming from the firebase database is null
                            //then add empty array init otherwise add the firebase information
            return action.payload == null ?
            {...state, contacts: []} : {...state, contacts: action.payload}

        case SET_LOADING:
            return {
                ...state, 
                isLoading: action.payload
            }
         
        case CONTACT_TO_UPDATE: 
            return {
                ...state, 
                contactToUpdateKey: action.key, 
                contactToUpdate: action.payload
            }   
        case SET_SINGLE_CONTACT:
            return {
                ...state,
                contact: action.payload
            }

    }
}
export default reducer