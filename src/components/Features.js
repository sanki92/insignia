import React, { useEffect } from 'react'
import $ from 'jquery'
const Features = () => {
    useEffect(() => {

    }, [])
    return (
        <div id='features' className="container mx-auto features">
            <h1>Features</h1>
            <div className='row justify-content-evenly my-5'>
            <div className="card  my-2" >
            <img src="./Images/ClipboardText.svg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Search Data</h5>
                <p className="card-text">Don’t worry if your data is very large, Insignia provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                <a href="#" className="card-link ">Learn More <img src="https://img.icons8.com/ios-filled/20//9C69E2/right--v1.png"/></a>
            </div>
            </div>
            <div className="card  my-2" >
            <img src="./Images/Printer.svg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Print Out</h5>
                <p className="card-text">Print out service gives you convenience if someday you need print data, just edit it all and just print it.</p>
                <a href="#" className="card-link">Learn More <img src="https://img.icons8.com/ios-filled/20//9C69E2/right--v1.png"/></a>
            </div>
            </div>
            <div className="card  my-2" >
            <img src="./Images/ShieldCheck.svg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Security Code</h5>
                <p className="card-text">Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.</p>
                <a href="#" className="card-link">Learn More <img src="https://img.icons8.com/ios-filled/20//9C69E2/right--v1.png"/></a>
            </div>
            </div>
            </div>
        </div>

    )
}

export default Features
