import React, { InputHTMLAttributes } from 'react';

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

    function _type(props:any){
        if(props.type !== "textarea")
        {
            return(
                    <label>{props.label}
                        <input type={props.type} 
                            name={props.name}
                            onChange={props.onChange}
                            value={props.value} />
                    </label>
            );
        }
        else
        {
            return(
                <label>{props.label}
                    <textarea 
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