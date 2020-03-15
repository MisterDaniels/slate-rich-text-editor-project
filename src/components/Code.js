import React from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';

const showLineNumbers = false;

const Code = props => (
    <React.Fragment>
        <CodeBlock
            text={ props.code }
            language={ props.language }
            showLineNumbers={ showLineNumbers }
            theme={ dracula }
            wrapLines 
        />
    </React.Fragment>
);

export default Code;