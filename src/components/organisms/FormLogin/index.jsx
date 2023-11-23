import React, { useState } from 'react'
import { Button, Input } from '../../atoms'

const FormLogin = () => {
    const [isUsername, setUsername] = useState('')
    const [isPassword, setPassword] = useState('')

    const HandleLoginButton = (data) =>{
        if(data.username && data.password){
            console.log("Data: ",data)
        }
    }

  return (
    <div className='border-2 border-sky-800 rounded-xl bg-sky-800 text-sky-100 w-80 shadow-lg shadow-amber-200'>
        <div className='px-2 py-1 text-center'>Login</div>
        <div className='flex flex-col gap-3 p-3 bg-white text-gray-900 items-center'>
            <Input
                label="Username"
                type="text"
                onChange={(e)=>{setUsername(e.target.value)}}
                value={isUsername}
            />
            <Input
                label="Password"
                type="password"
                onChange={(e)=>{setPassword(e.target.value)}}
                value={isPassword}
            />
            <Button
                className='border-2 border-sky-700 bg-sky-700 text-sky-100 rounded-md px-3 hover:bg-sky-100 hover:text-sky-700'
                onClick={()=>{
                    HandleLoginButton({
                        username: isUsername,
                        password: isPassword
                    })
                }}
            >
                Login
            </Button>
        </div>
        <div className='px-2 py-1'></div>
    </div>
  )
}

export default FormLogin