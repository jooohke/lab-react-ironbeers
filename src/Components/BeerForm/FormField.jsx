import React from 'react'

const FormField = (props) => {
    function classNameType () {
        return (props.children.type === "textarea" ? " textarea" : "")
    }
    return (
        <div className={"FormField" + classNameType()}>
            <label htmlFor={props.htmlFor}>{props.label}</label>
            {props.children}
        </div>
    )
}

export default FormField

