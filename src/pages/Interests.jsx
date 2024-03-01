import React from "react";
import Card from 'react-bootstrap/Card';
import "./Features.css";

import myImage from '../components/images/xoxo_logo.png'


const Interests = () => {
    return (
        <div className="feature-page"> 
              <h1 className="feature-title"> UNDER CONSTRUCTION </h1>
           <div>
               <div className="feature-content">
                <br/> We're working hard to make this
                <br/> website available again as soon as
                <br/> possible. You will then find a new
                <br/> design and our new collection!
                <br/>
                <br/> Until then we look forward to seeing 
                <br/> you on our website.
                <br/>
                <br/>
                <img
                      src={myImage}
                      width="150"
                      height="50"
                      alt="xoxo logo"
                    />
               </div>
           </div>
         </div>
    )
    }

export default Interests;