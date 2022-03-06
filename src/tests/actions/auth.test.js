import { login, logout } from "../../actions/auth";
import { types } from "../../types/types";


describe('Auth tests', () => {

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

    test('should logout', () => {

        

    });

});