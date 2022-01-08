import React from 'react'

const Footer = () => {
    return (
        <div id='footer' className='container-fluid footer'>
            <div className="container foot-sec1 mx-auto">
                <div className="try">
                <h1>Try for free!</h1>
                <p>Get limited 1 week free try our features!</p>
            </div>
            <div className="btn-container">
                <button className="btn text-light mx-1">Learn More</button>
                <button style={{"color":"#9C69E2"}} className="btn mx-1">Request Demo<img src="https://img.icons8.com/ios-filled/25//9C69E2/right--v1.png"/></button>
            </div>
            </div>
            <div className="container foot-sec2 mx-auto">
                <div className='container mx-2 my-2  foot-sec2A'>
                <a className="navbar-brand my-4 mx-0" href=""><img src="./Images/Logo.png" alt="" /> Insignia</a>
                    <p>Insignia Society, 234
                        Bahagia Ave Street PRBW 29281</p>
                    <p>info@insignia.com 
                    1-232-3434 (Main)</p>
                </div>
                <div className='container mx-2 my-2  foot-sec2B'>
                    <p className='my-3'>About</p>
                    <p>Profile</p>
                    <p>Features</p>
                    <p>Careers</p>
                    <p>DW news</p>
                </div>
                <div className='container mx-2 my-2  foot-sec2C'>
                    <p className='my-3'>Help</p>
                    <p>Support</p>
                    <p>Signup</p>
                    <p>Guide</p>
                    <p>Reports</p>
                    <p>Q&A</p>
                </div>
                <div className='container mx-2 my-2  foot-sec2D'>
                    <p className='text-center'>Social Media</p>
                    <div className="container media d-flex">
                        <img  className="mx-1"src="./Images/FbLogo.svg" alt="" />
                        <img className="mx-1" src="./Images/IgLogo.svg" alt="" />
                        <img  className="mx-1"src="./Images/TwitterLogo.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
