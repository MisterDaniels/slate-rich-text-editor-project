import React from 'react';
import Icon from 'react-icons-kit';
import { quotesLeft } from 'react-icons-kit/icomoon/quotesLeft';

const headBlockQuote = {
    width: '100%',
    height: '2rem',
    marginBottom: '1rem'
}

const BlockQuote = props => (
    <React.Fragment>
        <blockquote>
            <div className="header" style={headBlockQuote}>
                <Icon icon={quotesLeft} className='almostHidden' />
                <hr className='almostHidden' scale='small'/>
            </div>
            <div className="body">
                { props.children }
            </div>
            <div className="footer">

            </div>
        </blockquote>
    </React.Fragment>
);

export default BlockQuote;