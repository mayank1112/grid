import PropTypes from 'prop-types';
import { memo } from 'react';
import { Button } from '@material-ui/core';

const NextButton = ({ onClick, disabled }) => {
    const customProps = disabled ? { disabled: '' } : {};
    return (
        <div className='button nextButton'>
            <Button {...customProps} onClick={onClick} variant="contained" color="primary">Next</Button>
        </div>
    );
};

NextButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
};

export default memo(NextButton);
