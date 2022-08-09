import React from 'react'
import GitHubLogo from "../assets/GitHubLogo.png";
import LinkedInLogo from "../assets/LinkedInLogo.png";

function footer() {
    return(
        <div>
            <div className='footerContainer'>
                <div className='footerContentContainer'>
                    <h5 style={{color: '#474747'}}>Designed and developed by James Malone</h5>

                    <a href="https://github.com/jmalone801" target="_blank" rel="noopener noreferrer">
                        <img src={GitHubLogo} alt='GitHub Logo' style={{ width:'26px' }}/>
                    </a>

                    <a href="https://www.linkedin.com/in/jamesemalone/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedInLogo} alt='LinkedIn Logo' style={{ width:'26px' }}/>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default footer