import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';


describe('AuthReducer tests', () => {

    test('should login', () => {

        const initState = {};

        const action = {
            type: types.login,
            payload: {
                uid: 'abc',
                displayName: 'Carlos'
            }
        };

        const state = authReducer( initState, action );

        expect( state ).toEqual({
            uid: 'abc',
            name: 'Carlos'
        });

    });

    test('should logout', () => {

        const initState = {
            uid: 'fdfsdfsdf454564',
            name: 'Carlos'
        };

        const action = {
            type: types.logout,
        };

        const state = authReducer( initState, action );

        expect( state ).toEqual({});

    });

    test('should not make changes', () => {

        const initState = {
            uid: 'fdfsdfsdf454564',
            name: 'Carlos'
        };

        const action = {
            type: 'dsadsds',
        };

        const state = authReducer( initState, action );

        expect( state ).toEqual( initState );

    });

});