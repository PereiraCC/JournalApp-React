import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { login, logout, startLoginEmailPassword, startLogout } from '../../actions/auth';
import { types } from '../../types/types';

const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

const initialState = {};

let store = mockStore( initialState );

describe('Auth tests', () => {

    beforeEach(() => {
        store = mockStore( initialState );
    });

    test('login and logout should create a action respectively', () => {

        const uid = 'ABC123';
        const displayName = 'Carlos';

        const loginAction = login(uid, displayName);
        const logoutAction = logout();

        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                uid: uid,
                displayName: displayName
            }
        });

        expect(logoutAction).toEqual({
            type: types.logout,
        });

    });

    test('should logout startLogout', async () => {

        await store.dispatch( startLogout() );

        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.logout
        });

        expect( actions[1] ).toEqual({
            type: types.notesLogoutCleaning
        });

    });

    test('should start the Login with email and password', async () => {

        await store.dispatch( startLoginEmailPassword('test@testing.com', '123456' ) );

        const actions = store.getActions();
        
        expect( actions[1] ).toEqual({
            type: types.login,
            payload: {
                uid: 'Y2KED95lUWW0ZaGAIJK8Aq3grpg1',
                displayName: null
            }
        });
        

    })

});