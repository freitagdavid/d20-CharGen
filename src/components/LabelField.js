import React from 'react';
const LabelField = props => {
    return (
        <>
            <label htmlFor={props.fieldName}>{props.label}</label>
            <input type={props.fieldType} name={props.fieldName}/>
        </>
    );
};

export default LabelField;