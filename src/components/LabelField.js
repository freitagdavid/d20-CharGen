import React from 'react';
import styled from "styled-components";
const LabelField = props => {
    return (
        <div className={props.className}>
            <label htmlFor={props.fieldName}>{props.label}</label>
            <input type={props.fieldType} name={props.fieldName}/>
        </div>
    );
};

const StyledLabelField = styled(LabelField)`
    border: solid black 1px;
    border-radius: 10px;
    padding: 10px;
    width: 200px;
    display: flex;
    flex-direction: column;
    label {
        align-self: flex-start;
    }
`

export default StyledLabelField;