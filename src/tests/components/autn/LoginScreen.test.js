import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startGoogleLogin, startLoginEmailPassword} from '../../../actions/auth';

import { LoginScreen } from '../../../components/auth/LoginScreen';

jest.mock('../../../actions/auth', () => ({
    startGoogleLogin: jest.fn(),
    startLoginEmailPassword: jest.fn()
}));


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
store.dispatch = jest.fn();

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
        jest.clearAllMocks();
    });

    test('should show correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should trigger action Login with google', () => {

        wrapper.find('.google-btn').prop('onClick')();

        expect( startGoogleLogin ).toHaveBeenCalled();

    }); 

    test('should trigger action Login with arguments', () => {

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect( startLoginEmailPassword ).toHaveBeenCalledWith('cali@gmail.com', '123456');

    }); 


});