// import React, { useState } from 'react';
// import crypto from 'crypto';
// import { useLocation } from 'react-router-dom';

// const SecretKey = "eqkksezylturgsyi";

// function RedirectComponent() {
//   const [authenticated, setAuthenticated] = useState(false);
//   const location=useLocation();
//   const encryptedURL = new URLSearchParams(location.search).get("checksum");
//   // Function to calculate checksum
//   const calculateChecksum = (msg) => {
//     return crypto.createHmac('sha256', SecretKey)
//                  .update(msg)
//                  .digest('base64');
//   };

//   // Function to handle authentication
//   const handleAuthentication = (msg) => {
//     const input = msg.split("|");
//     const receivedChecksum = input[input.length - 1];
//     const message = msg.slice(0, msg.lastIndexOf("|"));
//     const calculatedChecksum = calculateChecksum(message);

//     if (receivedChecksum === calculatedChecksum) {
//       // If checksum matches, set authenticated to true
//       setAuthenticated(true);
//     } else {
//       // If checksum does not match, show an error message
//       console.error("Something went wrong with authentication.");
//     }
//   };

//   // Function to redirect with checksum as query parameter
//   const redirectToNextPage = (msg) => {
//     const url = `http://localhost:3000/?checksum=${msg}`;
//     window.location.href = url;
//   };

//   return (
//     <div>
//       {/* Button to simulate received message */}
//       <button onClick={() => handleAuthentication(encryptedURL)}>
//         Simulate Received Message
//       </button>

//       {/* Display message based on authentication */}
//       {authenticated ? (
//         <p>Successfully Authenticated: siddhant.s</p>
//       ) : (
//         <p>Not Authenticated</p>
//       )}

//       {/* Button to redirect with checksum */}
//       {authenticated && (
//         <button onClick={() => redirectToNextPage(encryptedURL)}>
//           Go to Next Page
//         </button>
//       )}
//     </div>
//   );
// }

// export default RedirectComponent;
