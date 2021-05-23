import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { memo } from 'react';

const PreviousButton = ({ onClick, disabled }) => {
    const customProps = disabled ? { disabled: true } : {};
    return (
        <div className='button'>
            <Button {...customProps} onClick={onClick} variant="contained" color="primary">Previous</Button>
        </div>
    );
};

PreviousButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
};

export default memo(PreviousButton);
