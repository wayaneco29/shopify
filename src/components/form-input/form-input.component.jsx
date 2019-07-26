import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, ...otherProps }) => (
    <div className="form-group">
        <input {...otherProps} onChange={handleChange} />
    </div>
)

export default FormInput;