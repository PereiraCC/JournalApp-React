import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { LoginScreen } from '../../../components/auth/LoginScreen';

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
            <LoginScreen />
        </MemoryRouter>
    </Provider>
);

describe('<LoginScreen /> tests', () => {

    beforeEach(() => {
        store = mockStore( initialState );
    });

    test('should show correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    


});