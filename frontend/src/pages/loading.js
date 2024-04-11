import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';

const RedirectComponent = () => {
  const secret = "eqkksezylturgsyi";

  const [message, setMessage] = useState("");
  const [redirectUrl, setRedirectUrl] = useState("");

  useEffect(() => {
    // Get the message and checksum from the URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const rmsg = urlParams.get('msg');

    if (rmsg) {
        const lastPipeIndex = rmsg.lastIndexOf("|");
      var rchecksum = rmsg.slice(lastPipeIndex + 1);
      rchecksum = rchecksum.replace(' ', '+');
         console.log("Hii",rchecksum)
      const msg = rmsg.slice(0, lastPipeIndex+1);
      const checksum = CryptoJS.HmacSHA256(msg, secret).toString(CryptoJS.enc.Base64);
      console.log(checksum)
      if (rchecksum === checksum) {
        // If checksum matches, set success message
        setMessage("Successfully Authenticated: " + msg);
        // Set the URL for redirection
        setRedirectUrl('http://localhost:3000/test_nodues?msg=' + encodeURIComponent(rmsg));
      } else {
        // If checksum does not match, set error message
        setMessage("Something went wrong with authentication.");
      }
    } else {
      setMessage("No message to verify.");
    }
  }, []);

  return (
    <div>
      <p>{message}</p>
      {redirectUrl && <a href={redirectUrl} className="button">Go to Next Page</a>}
    </div>
  );
};

export default RedirectComponent;

