import React from 'react';
import Icon from 'react-icons-kit';
import { search } from 'react-icons-kit/feather/search';

const inputStyle = {
    paddingLeft: '2em',
    width: '100%',
    backgroundColor: 'transparent'
}

const iconStyle = {
    top: '0.5em',
    left: '0.5em',
    color: '#ccc'
}

const SearchInput = () => (
    <div>
        <Icon icon={ search } style={ iconStyle } />
        <input 
            type="search" 
            placeholder="Search for a text..." 
            style={ inputStyle} />
    </div>    
);

export default SearchInput;