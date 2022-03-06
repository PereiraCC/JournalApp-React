import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { db, doc, deleteDoc } from "../../firebase/firebase-config";
import { startNewNote } from '../../actions/notes';
import { types } from '../../types/types';

const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

const store = mockStore({
    auth: {
        uid: 'TESTING',
    }
});


describe('Notes actions tests', () => {

    test('should create a new note startNewNote', async () => {

        await store.dispatch( startNewNote() );

        const actions = store.getActions();
        // console.log(actions);

        expect( actions[0] ).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number),
            }
        });

        expect( actions[1] ).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number),
            }
        });

        const idDoc = actions[1].payload.id;
        const noteRef = doc( db, `TESTING/journal/notes/${ idDoc }` );

        await deleteDoc(noteRef);


    });

});