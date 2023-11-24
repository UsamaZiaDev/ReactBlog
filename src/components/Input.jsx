import React from 'react'


const Input = React.forwardRef( function (props) {

    const {type = "text" , label, labelClass, value, inputClass, placeholder} = props
    
    const id = React.useId()

    return(
        <div className="mb-3 me-5">

           {    
                label && <label 
                    for={id} 
                    className={` ${labelClass} `}
                    >
                        {label}
                </label>
            }
            
            <input 
                type={type}
                className={` form-control ${inputClass} `}
                id={id} 
                placeholder={placeholder}
                value={value}
            />

        </div>
    ) 

} )


export default Input

