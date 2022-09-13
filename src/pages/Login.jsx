import React,{useState} from 'react'

function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")

  return (
    <div className='  flex flex-col m-8  items-center  p-3   '>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email" className=' p-2 border w-50 mb-3  w-96' />

        <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" className=' p-2 border w-50 mb-4 w-96' />

        <button className='bg-green-500 p-4 text-white mb-4  w-96'>Login</button>

        <button className='bg-blue-500 p-4 text-white  w-96'>Register</button>
    </div>
  )
}

export default Login