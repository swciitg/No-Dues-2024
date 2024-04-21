import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';

const RedirectComponent = () => {
  const secret = "eqkksezylturgsyi";

  const [message, setMessage] = useState("");
  const [redirectUrl, setRedirectUrl] = useState("");
  const [msgcolor, setMsgColor] = useState("text-black");
const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";
  useEffect(() => {
    // Get the message and checksum from the URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const rmsg = urlParams.get('msg');

    if (rmsg) {
        const lastPipeIndex = rmsg.lastIndexOf("|");
      var rchecksum = rmsg.slice(lastPipeIndex + 1);
      rchecksum = rchecksum.replace(' ', '+');
      const msg = rmsg.slice(0, lastPipeIndex+1);
      const checksum = CryptoJS.HmacSHA256(msg, secret).toString(CryptoJS.enc.Base64);
      if (rchecksum === checksum) {
        // If checksum matches, set success message
        setMessage("Successfully Authenticated " );
        setMsgColor("text-green-500");
        // Set the URL for redirection
        setRedirectUrl(`${FRONTEND_URL}/test/nodues/dashboard?msg=` + encodeURIComponent(rmsg));
        localStorage.setItem('token', encodeURIComponent(rmsg));
      } else {
        // If checksum does not match, set error message
        setMessage("Something went wrong with authentication.");
        setMsgColor("text-red-500");
      }
    } else {
      setMessage("Error! Please authenticate yourself using IITG SSO");
        setMsgColor("text-black");
    }
  }, []);

  return (
    <div>
        <div className=' flex items-center justify-center my-20'><p className= {`${msgcolor} font-bold  border-black px-20 py-4 border-2 text-2xl`}>{message}</p></div>
      
      <div className=' flex items-center justify-center'>
      {redirectUrl && <a href={redirectUrl} className=" border px-10 py-3 bg-blue-400 text-white  font-bold my-10 m">Proceed to Dashboard</a>}
   </div> </div>
  );
};

export default RedirectComponent;