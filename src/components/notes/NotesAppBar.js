import React from 'react';

export const NotesAppBar = () => {
    return (
        <div className="notes__appbar">
            <span>29 January 2022</span>

            <div>
                <button className="btn">
                    Picture
                </button>
                
                <button className="btn">
                    Save
                </button>
            </div>
        </div>
    );
};