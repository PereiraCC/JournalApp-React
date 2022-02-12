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

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = (state = initialState, action ) => {

    switch (action.key) {


    
        default:
            return state;
    }

}