import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { signInWithEmailAndPassword, getAuth } from '../../firebase/firebase-config';

import { login } from '../../actions/auth';
import { AppRouter } from '../../routers/AppRouter';

jest.mock('../../actions/auth', () => ({
    login: jest.fn()
}));


const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

const initialState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null,
    },
    notes: {
        active: {
            id: 'ABC',
        },
        notes: []
    }
};

let store = mockStore( initialState );
store.dispatch = jest.fn();

describe('<AppRouter/> tests', () => { 

    test('should call login if login is successful', async() => { 

        let user;
        
        await act(async () => {

            const auth = getAuth();
            const userCred = await signInWithEmailAndPassword(auth, 'test@testing.com', '123456');
            
            user = userCred.user;
            
            const wrapper = mount( 
                <Provider store={ store} >
                    <MemoryRouter>
                        <AppRouter />
                    </MemoryRouter>
                </Provider>
            );

            
        });
        
        expect( login ).toHaveBeenCalledWith('Y2KED95lUWW0ZaGAIJK8Aq3grpg1', null);
    })

});