import React from 'react'

const Button = ( {
                    children, 
                    text, 
                    className, 
                    bg='primary',
                     ...props
        } ) => {

                  return (
                    <button type="button" className={` btn btn-${bg} ${className} text-capitalize`} {...props} >
                        {/* {children} */}
                        {text}
                    </button>
                    
                  )
}

export default Button