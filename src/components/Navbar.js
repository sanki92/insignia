import React,{useEffect} from 'react'
import $ from 'jquery'

const Navbar = () => {
  useEffect(() => {
    $(document).ready(function(){
      $(".navbar").css({"background": "#282828","transition":"all 1.5s"});  	
      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 120) {
          $(".navbar").addClass("black").css({"background": "#2828283c"})
        }
        else{
          $(".navbar").removeClass("black").css({"background": "#282828","transition":"all 1.5s"});  	
        }
      })
       $(".hamburger").click(function(){
          $(this).toggleClass("is-active");
        });
    })
  }, [])
    return (
   <nav className="navbar navbar-expand-lg navbar ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#hero"><img src="./Images/Logo.png" alt="" /> Insignia</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <div className="hamburger" id="hamburger-1">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item  ">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#subs">Help</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#features">Features</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">Signup</a>
              </li>
              <li className="nav-item  ">
                <a style={{"color": "#30FBEF"}} className="btn" href="#footer">Request a Demo<img src="https://img.icons8.com/ios-filled/25//9C69E2/right--v1.png"/></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
