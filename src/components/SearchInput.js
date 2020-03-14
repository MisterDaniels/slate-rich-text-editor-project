import React from 'react';
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

    const onInputSearchChange = e => {
        const textToSearch = props.editor.text;
        const content = e.target.value;
        const texts = textToSearch.document.getTexts();
        const decorations = [];

        texts.forEach(node => {
            const { key, text } = node;
            const parts = text.split(content);
            let offset = 0;

            parts.forEach((part, i) => {
                if (i !== 0) {
                    decorations.push({
                        anchorKey: key,
                        anchorOffset: offset - content.length,
                        focusKey: key,
                        focusOffset: offset,
                        marks: [{
                            type: 'highlight'
                        }],
                        atomic: true
                    });
                }

                offset = offset + part.length + content.length;
            });
        });

        const search = textToSearch.change()
                    .setValue({ decorations })

        props.editor.callback(search);
    }

    return (
        <div className="tooltip-tools" 
             style={ divStyle }
             active={ props.active }>
            <Icon icon={ searchIcon } 
                  style={ iconStyle } />
            <input 
                type="search" 
                placeholder="Search for a text..."
                onChange={ onInputSearchChange } 
                style={ inputStyle} />
        </div>   
    )
};

export default SearchInput;