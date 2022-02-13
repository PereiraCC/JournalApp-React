import { useDispatch, useSelector } from 'react-redux';

import { startSaveNote } from '../../actions/notes';

export const NotesAppBar = () => {

    const { active } = useSelector( state => state.notes );
    const dispatch = useDispatch();

    const handleSaveNote = () => {
        dispatch( startSaveNote( active ) );
    }

    return (
        <div className="notes__appbar">
            <span>29 January 2022</span>

            <div>
                <button className="btn">
                    Picture
                </button>
                
                <button 
                    className="btn"
                    onClick={ handleSaveNote }
                >
                    Save
                </button>
            </div>
        </div>
    );
};
