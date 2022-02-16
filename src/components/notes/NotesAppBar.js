import { useDispatch, useSelector } from 'react-redux';

import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {

    const { active } = useSelector( state => state.notes );
    const dispatch = useDispatch();

    const handleSaveNote = () => {
        dispatch( startSaveNote( active ) );
    }

    const handleUploadPicture = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if( file ) {
            dispatch( startUploading( file ) );
        }
    }

    return (
        <div className="notes__appbar">
            <span>29 January 2022</span>

            <input 
                id="fileSelector"
                type="file"
                name="file"
                style={ { display: 'none' } }
                onChange={ handleFileChange }
            />

            <div>
                <button 
                    className="btn"
                    onClick={ handleUploadPicture }    
                >
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
