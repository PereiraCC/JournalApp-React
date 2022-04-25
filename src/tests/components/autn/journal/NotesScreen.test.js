import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { activeNote } from '../../../../actions/notes';
import { NoteScreen } from '../../../../components/notes/NoteScreen';

jest.mock('../../../../actions/notes', () => ({
    activeNote: jest.fn()
}));

const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

const initialState = {
    auth: {
        uid: '1',
        name: 'Carlos',
    },
    ui: {
        loading: false,
        msgError: null,
    },
    notes: {
        active: {
            id: 1234,
            title: 'The best title',
            body: 'The best body',
            date: 0
        },
        notes: []
    }
};

let store = mockStore( initialState );
store.dispatch = jest.fn();

const wrapper = mount( 
    <Provider store={ store} >
        <NoteScreen/>
    </Provider>
);

describe('<Sidebar /> test', () => { 

    test('should show correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should triger the active note', () => { 

        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'The best title',
            }
        });

        expect( activeNote ).toHaveBeenLastCalledWith(
            1234,
            {
                body: 'The best body',
                title: 'The best title',
                id: 1234,
                date: 0
            }
        );

    });

});