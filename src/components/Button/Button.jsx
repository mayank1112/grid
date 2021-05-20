import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Box = ({ children, onClick }) => (
    <div
        className='box'
        onClick={onClick}
    >{children}</div>
);

Box.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Box;
