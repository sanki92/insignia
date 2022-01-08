import React from 'react'

const Section1 = () => {
    return (
        <section id='hero' className="hero container-fluid">
          <div className="container row mx-auto">
            <div className="container  header col-md-7 d-flex flex-column">
                 <h1>Save your data storage here.</h1>
                 <p className='w-75 my-3'>Insignia is a data storage area that has been
                        tested for security, so you can store your data here
                        safely but not be afraid of being stolen by others.</p>
                    <a href="/" className='btn text-light my-2'>Learn More</a>
            </div>

                 <img className=' col-md-5 my-4' src="./Images/Cloud_database_SVG 1.svg" alt="" />
          </div>
      </section>
    )
}

export default Section1
