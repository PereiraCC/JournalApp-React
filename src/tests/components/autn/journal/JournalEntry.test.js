import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { activeNote } from '../../../../actions/notes';
import { JournalEntry } from '../../../../components/journal/JournalEntry';

const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

const initialState = {};

let store = mockStore( initialState );
store.dispatch = jest.fn();

const note = {
    id: 1,
    title: 'Note title',
    body: 'Note body',
    date: '2020-01-01',
    url: 'https://image.com/image.jpg',
}

const wrapper = mount( 
    <Provider store={ store} >
        <JournalEntry { ...note }/>
    </Provider>
);


describe('<JournalEntry /> ', () => { 

    test('should show correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should active note', () => { 

        wrapper.find('.journal__entry').prop('onClick')();
        expect( store.dispatch ).toHaveBeenCalledWith(
            activeNote( note.id, { ...note } )
        );

    });

});