import React from 'react'
import "./Home.css"

function Home() {
    const handleSignup= ()=> (
        alert("Congratulation! You have signed up successfully!")


   )

   const handleInfo= ()=> (
    alert("Learn more in the next page!")


    )       
    return (
        <div className="home">
            <div className="home__title">
                Get matched with a job you love, anywhere.

            </div>
             {/*title*/}
             <div className="home__description">
                Create a free profile to unlock the opportunity for companies to apply to interview you with salary details upfront.

             </div>
             {/*description*/}
             <div className="home__buttons"onClick={handleSignup}>
                 <button className="home__button__signup">
                     Sign up for free
                 </button>
                 <button className="home__button__learnmore"  onClick={handleInfo}>
                     Learn more
                 </button>
             </div>
             {/*buttons*/}

        </div>
    )
}

export default Home
