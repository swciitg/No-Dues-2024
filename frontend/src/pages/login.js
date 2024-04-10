import React from 'react'
import { useLocation } from 'react-router-dom';
function Login() {
  const location=useLocation();
  const encryptedURL = new URLSearchParams(location.search).get("checksum");
  let checksumComponents = encryptedURL.split('|');

// Extract 'siddhant.s'
let firstElements= checksumComponents[1];
console.log(firstElements)
  return (
    <div className=' flex items-center justify-center pt-24 w-screen'>
      <div className=' flex  justify-center gap-2 font-bold'>
        Welcome <span className=' text-red-800'>{firstElements}</span>
    
      </div>
      {/* <a href='http://localhost:3002/auth/signin' className=' font-bold border  p-3  px-10 bg-blue-500 text-white hover:opacity-90 '>
        login with outlook
      </a> */}
    </div>
  )
}

export default Login
