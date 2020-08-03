/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import './formField.css';

interface inputForm{
    label:string,
    name?:string,
    type:string,
    value?:string,
    onChange?:any,
    rows?:number,
    maxLength?:number,
}
const FormField:React.FC<inputForm>=(props)=> {

    const _type=(props:any)=>{
        const isTextArea = (props.type === "textarea");
        const tag = isTextArea?"input":"textarea";

        //if(props.type !== "textarea")
        if(!isTextArea)
        {
            return(
                    <div className="form-field">
                            <input placeholder= ''
                                type={props.type} 
                                name={props.name}
                                onChange={props.onChange}
                                value={props.value}
                                required />
                            <label>{props.label}</label>
                    </div>
            );
        }
        else
        {
            return(
                <label>{props.label}
                    <textarea 
                    placeholder=" "
                    required 
                    rows={props.rows} 
                    maxLength={props.maxLength} 
                    name={props.name} 
                    onChange={props.onChange}
                    value={props.value} />
                </label>
        );
       }
    }

    return(
        <div>
           {_type(props)}
        </div>
    );
}
export default FormField;