import React from 'react';
import { SearchInput } from './index';

const FormatToolbar = (props) => (
    <div className="format-toolbar">
        <SearchInput></SearchInput>
        { props.children }
    </div>
);

export default FormatToolbar;