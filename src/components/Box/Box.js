import React from 'react';
import PropTypes from 'prop-types';

import './box.css';

const Box = ({ children, style, onMouseOver, onMouseOut, onClick }) => (
    <div
        className='box'
        style={style}
        onClick={onClick}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
    >{children}
    </div>
);

Box.propTypes = {
    style: PropTypes.object.isRequired,
    children: PropTypes.string.isRequired,
    onMouseOver: PropTypes.func.isRequired,
    onMouseOut: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Box;
