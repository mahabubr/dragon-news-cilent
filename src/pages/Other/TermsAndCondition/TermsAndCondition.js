import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h3>Here Is Our Terms And Condition</h3>
            <p>Go Back To <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndCondition;