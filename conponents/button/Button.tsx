import React from 'react'
interface ButtonProps {
    lable: string;
    buttonStyle: string;
    buttonClassStyle: string;
    action: any;
}

function Button(props: ButtonProps) {
    return (
        <div className={props.buttonClassStyle || ``}>
            <button type='button' className={props.buttonStyle || ``} onClick={props.action}>
                {props.lable}
            </button>
        </div>
    )
}

export default Button