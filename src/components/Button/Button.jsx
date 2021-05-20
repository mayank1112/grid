import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Box = ({ children, onClick }) => (
    <button
        className='box'
        onClick={onClick}
    >{children}</button>
);

Box.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Box;
