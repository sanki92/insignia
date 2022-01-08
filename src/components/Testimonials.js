import React from 'react'

const Testimonials = () => {
   const onChange=(e)=>{
    
    }
    return (
        <>
        <div className='container d-flex flex-column mx-auto testimonials'>
            <h1>Testimonials</h1>
            <div className="container d-flex flex-wrap">
                <div className='card-monial d-flex'>
                    <div className="img-user"><img src="./Images/user1.png" alt=".." /></div>
                    <div className='card-monial-text'>
                    <label htmlFor="name">Jhon Fang</label>
                    <div className="d-flex">
                        <p>Web Designer</p> <div className='ratings row mx-3'><img className='rate' src="https://img.icons8.com/material-outlined/100/30FBEF/filled-circle--v1.png"/><img className='rate' src="https://img.icons8.com/material-outlined/100/30FBEF/filled-circle--v1.png"/><img className='rate' src="https://img.icons8.com/material-outlined/100/30FBEF/filled-circle--v1.png"/><img className='rate' src="https://img.icons8.com/material-outlined/100/30FBEF/filled-circle--v1.png"/><img className='rate' src="https://img.icons8.com/material-outlined/100/282828/filled-circle--v1.png"/></div>
                    </div>
                    <p>Suspendisse ultrices at diam lectus nullam.
                        Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</p>
                    </div>
                </div>
                <div className='card-monial d-flex'>
                    <div className="img-user"><img src="./Images/user2.png" alt=".." /></div>
                    <div className='card-monial-text'>
                        <label htmlFor="name">Jenny Doe</label>
                    <div className="d-flex">
                        <p>UX Designer</p> <div className='ratings row mx-3'><img className='rate' src="https://img.icons8.com/material-outlined/100/30FBEF/filled-circle--v1.png"/><img className='rate' src="https://img.icons8.com/material-outlined/100/30FBEF/filled-circle--v1.png"/><img className='rate' src="https://img.icons8.com/material-outlined/100/30FBEF/filled-circle--v1.png"/><img className='rate' src="https://img.icons8.com/material-outlined/100/30FBEF/filled-circle--v1.png"/><img className='rate' src="https://img.icons8.com/material-outlined/100/30FBEF/filled-circle--v1.png"/></div>
                    </div>
                    <p>Suspendisse ultrices at diam lectus nullam.
                        Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</p>
                </div>
                    </div>
                    <div className='card-monial d-flex'>
                    <div className="img-user"><img src="./Images/user1.png" alt=".." /></div>
                    <div className='card-monial-text'>
                    <label htmlFor="name">Jhon Fang</label>
                    <div className="d-flex">
                        <p>Web Designer</p> <div className='ratings row mx-3'><img className='rate' src="https://img.icons8.com/material-outlined/100/30FBEF/filled-circle--v1.png"/><img className='rate' src="https://img.icons8.com/material-outlined/100/30FBEF/filled-circle--v1.png"/><img className='rate' src="https://img.icons8.com/material-outlined/100/30FBEF/filled-circle--v1.png"/><img className='rate' src="https://img.icons8.com/material-outlined/100/30FBEF/filled-circle--v1.png"/><img className='rate' src="https://img.icons8.com/material-outlined/100/282828/filled-circle--v1.png"/></div>
                    </div>
                    <p>Suspendisse ultrices at diam lectus nullam.
                        Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</p>
                    </div>
                </div>
                <div className='card-monial d-flex'>
                    <div className="img-user"><img src="./Images/user2.png" alt=".." /></div>
                    <div className='card-monial-text'>
                        <label htmlFor="name">Jenny Doe</label>
                    <div className="d-flex">
                        <p>UX Designer</p> <div className='ratings row mx-3'><img className='rate' src="https://img.icons8.com/material-outlined/100/30FBEF/filled-circle--v1.png"/><img className='rate' src="https://img.icons8.com/material-outlined/100/30FBEF/filled-circle--v1.png"/><img className='rate' src="https://img.icons8.com/material-outlined/100/30FBEF/filled-circle--v1.png"/><img className='rate' src="https://img.icons8.com/material-outlined/100/30FBEF/filled-circle--v1.png"/><img className='rate' src="https://img.icons8.com/material-outlined/100/30FBEF/filled-circle--v1.png"/></div>
                    </div>
                    <p>Suspendisse ultrices at diam lectus nullam.
                        Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</p>
                </div>
                    </div>
            </div>
        </div>
        <div id='subs' className='container subs mx-auto d-flex'>
            <div className='d-flex flex-column'>
            <h1>Subscribe</h1>
            <p>Join our newsletter to never miss any latest news.</p>
            </div>
            <div className='mail-bar search d-flex justify-content-between align-items-center'>
                <input type="email" onChange={onChange} value="Enter your e-mail address here" name="search" className=''/><button className='btn text-light'>Join Us</button>
            </div>
        </div>
        <hr/>
        </>
    )
}

export default Testimonials
