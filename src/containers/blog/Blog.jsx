import React from 'react'
import './Blog.css';

function blog() {
    return (
        <div>
            blog
        </div>
    )
}

export default blog




// import React, { useState } from "react";
// import "./Footer.css";

// function Footer({ primary = true, user = "Ed" }) {

//   return (
//     <div className="footer section__margin">
//       <Preview user={user} primary={primary} />
//     </div>
//   );
// }

// function Preview({ user, primary }) {
//   return (
//     <div>
//       {primary ? <h1>Ok primary est true</h1> : <h2>Pas ok, primary est faux</h2>}
//       {user !== null ? <h1>Welcome {user}</h1> : <h1>Welcome!</h1>}
//     </div>
//   );
// }

// export default Footer;
