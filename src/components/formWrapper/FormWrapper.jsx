import React from 'react';
import './styles.css';

const FormWrapper = ({children}) => {
	return(
		<div className="form-wrapper">
			{children}
		</div>
	)
}

export default FormWrapper;
