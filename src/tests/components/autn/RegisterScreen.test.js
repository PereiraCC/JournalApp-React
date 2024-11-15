import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { RegisterScreen } from '../../../components/auth/RegisterScreen';
import { types } from '../../../types/types';

// jest.mock('../../../actions/auth', () => ({
//     startGoogleLogin: jest.fn(),
//     startLoginEmailPassword: jest.fn()
// }));

const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

const initialState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null,
    },
};

let store = mockStore( initialState );

const wrapper = mount( 
    <Provider store={ store} >
        <MemoryRouter>
            <RegisterScreen />
        </MemoryRouter>
    </Provider>
);

describe('<RegisterScreen /> tests', () => {

    // beforeEach(() => {
    //     store = mockStore( initialState );
    //     // jest.clearAllMocks();
    // });

    test('should show correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should dispatch action respectively', () => {

        const emailField = wrapper.find('input[name="email"]');

        emailField.simulate('change', {
            target: {
                value: '',
                name: 'email'
            }
        });

        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.uiSetError,
            payload: 'Email is not valid'
        });

    });

    test('should show alert box with error message', () => {

        const initialState = {
            auth: {},
            ui: {
                loading: false,
                msgError: 'Email is not valid',
            },
        };
        
        const store = mockStore( initialState );
        
        const wrapper = mount( 
            <Provider store={ store} >
                <MemoryRouter>
                    <RegisterScreen />
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.find('.auth__alert-error').exists() ).toBe(true);
        expect(wrapper.find('.auth__alert-error').text().trim() ).toBe( initialState.ui.msgError );

    });

});