import React from 'react'
// import { Link } from "react-router-dom";

function footer() {
    return(
        <div>
            <div className='footerContainer'>
                <div className='footerContentContainer'>
                    <h5 style={{color: 'grey'}}>Designed and developed by James Malone</h5>
                    <a href="https://github.com/jmalone801" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/jamesemalone/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </div>
    )
}
export default footer