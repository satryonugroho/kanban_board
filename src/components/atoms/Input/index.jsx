import React, { useState } from 'react'

const Input = ({label, ...props}) => {
    const [isShowLabel,setShowLabel] = useState(false)

    return (
        <div className='grid w-full'>
            {isShowLabel && <label>{label}</label>}
            <input 
            placeholder={label} 
            onBlur={()=>setShowLabel(false)} 
            onFocus={()=>{setShowLabel(true)}} 
            className='border-b focus:outline-none focus:border-gray-800 w-full'
            {...props}/>
        </div>
    )
}

export default Input