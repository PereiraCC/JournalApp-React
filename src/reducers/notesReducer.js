/* 
    {
        notes: [],
        active: null || {
            id: 'DSFSDFSDSKFJDSKLFJ',
            title: '',
            body: '',
            imageUrl: '',
            date: '12313215454'
        }
    }
*/

import { types } from "../types/types";

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = (state = initialState, action ) => {

    switch (action.type) {

        case types.notesAddNew:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        
        case types.notesLoad:
            return {
                ...state,
                notes: [ ...action.payload ]
            }
    
        default:
            return state;
    }

}