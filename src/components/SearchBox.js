import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input
                className='bg-light-green dib br3 pa3 ma2 shadow-3'
                type='search'
                placeholder='Search for robots'
                onChange={searchChange}
            />
        </div>
    );

}
export default SearchBox;