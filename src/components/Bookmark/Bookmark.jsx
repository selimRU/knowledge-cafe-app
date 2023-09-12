import React from 'react';

const Bookmark = ({ bookmark }) => {
    const { title,id } = bookmark
    return (
        <div className='my-3 m-2 p-2 rounded-sm flex justify-between'>
            <p className=' bg-red-400 px-4 py-2 rounded-sm text-yellow-50'>{title}</p>
        </div>
    );
};

export default Bookmark;