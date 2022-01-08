import React from 'react'

const About = () => {
    return (
        <div id='about' className='container about mx-auto row '>
            <img className='col-md-5 my-4' src="./Images/security_SVG 1.svg" alt=""  />
            <div className='about-header d-flex flex-column col-md-7'>
                <h1>We are a high-level data storage bank</h1>
                <p>The place to store various data that you can access at any time through the internet  and where you can carry it. <br/>
                This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse. </p>
            </div>
        </div>
    )
}

export default About
