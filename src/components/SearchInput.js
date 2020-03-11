import React, { useState, useCallback } from 'react';
import Icon from 'react-icons-kit';
import { search as searchIcon } from 'react-icons-kit/feather/search';

const divStyle = {
    position: 'relative'
}

const inputStyle = {
    paddingLeft: '2em',
    width: '100%',
}

const iconStyle = {
    position: 'absolute',
    left: '0.5em',
    color: '#ccc',
    fontSize: '18px',
    verticalAlign: 'text-bottom'
}

const SearchInput = props => {

    const [search, setSearch] = useState();

    const decorate = useCallback(([node, path]) => {
        const ranges = [];

        if (search && Text.isText(node)) {
            const { text } = node;
            const parts = text.split(search);
            let offset = 0;

            parts.forEach((part, i) => {
                if (i !== 0) {
                    ranges.push({
                        anchor: { path, offset: offset - search.length },
                        focus: { path, offset },
                        highlight: true
                    });
                }
            });
        }

        return ranges;
    },[search]);

    return (
        <div className="tooltip-tools" 
             style={ divStyle }
             active={ props.active }>
            <Icon icon={ searchIcon } 
                  style={ iconStyle } />
            <input 
                type="search" 
                placeholder="Search for a text..."
                onChange={e => setSearch(e.target.value)} 
                style={ inputStyle} />
        </div>   
    )
};

export default SearchInput;