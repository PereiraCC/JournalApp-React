/**

* @jest-environment node

*/

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { db, doc, deleteDoc, getDoc} from "../../firebase/firebase-config";
import { startLoadingNotes, startNewNote, startSaveNote, startUploading } from '../../actions/notes';
import { types } from '../../types/types';

const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

jest.mock('../../helpers/fileUpload', () => {
    return {
        fileUpload: () => {
            return Promise.resolve(
                "https://misfotos.com/photo.png"
            );
        },
    };
});

const initialState = {
    auth: {
        uid: 'TESTING',
    },
    notes: {
        active: {
            id: 'GihsOU4F2ClPAvVIYifa',
            title: 'Hello',
            body: 'World'
        }
    }
}

let store = mockStore( initialState );

describe('Notes actions tests', () => {

    beforeEach(() => {

        store = mockStore( initialState );

    });

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

    test('should load notes startLoadingNotes', async () => {

        await store.dispatch( startLoadingNotes('TESTING') );
        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array)
        });

        const expected = {
            id: expect.any(String),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number),
        };

        expect( actions[0].payload[0] ).toMatchObject( expected );

    });

    test('should update the note startSaveNote', async () => {

        const note = {
            id: 'GihsOU4F2ClPAvVIYifa',
            title: 'titulo',
            body: 'body'
        };

        await store.dispatch( startSaveNote( note ) );

        const actions = store.getActions();

        expect( actions[0].type ).toBe( types.notesUpdated );

        const docRef = doc( db, `TESTING/journal/notes/${ note.id }` );

        const docSnap = await getDoc(docRef);

        expect( docSnap.data().title ).toBe( note.title );
    });

    test('should update entry url startUploading', async () => {

        const file = [];
        await store.dispatch( startUploading( file ) );

        const docRef = doc( db, `TESTING/journal/notes/GihsOU4F2ClPAvVIYifa` );
        const docSnap = await getDoc(docRef);

        expect( docSnap.data().url ).toBe( 'https://misfotos.com/photo.png' );

    });

});