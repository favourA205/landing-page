import React from 'react'
import "./Nav.css" 


function Nav() {
      const handleSignup= ()=> (
         alert("Congratulation! You have signed up successfully!")


    )

    return (
        <div className="nav">
            <div className="nav__whole">
                <h1 className="nav__logo">
                    HIRED
                </h1>
                {/*nav__logo */}
                <div className="nav__right">
                    <div className="nav__dropdown">
                        <button className="nav__link"><strong>Find candidates</strong></button>
                            <div class="nav__dropdown-content">
                                <a href="#">Why Hired?</a>
                                <a href="#">Pricing</a>
                                <a href="#">Success stories</a>
                                <a href="#">Resources</a>
                            </div>
                    </div>
                    {/*nav__dropdown*/}
                    <a className="nav__linkb" href="#"><strong>Find a job</strong></a>
                    {/*nav__link */}
                    <a className="nav__linkb" href="#"><strong>Log in</strong></a>
                    {/*nav__link */}
                    <button className="nav__signup" onClick={handleSignup}>Sign up for free</button>
                    {/*nav__signupbutton */}
                </div>
            </div>
            
            
        </div>
    )
}

export default Nav
