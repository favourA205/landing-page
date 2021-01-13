import React from 'react'
import "./Market.css"

function Market() {
    return (
        <div className="market">
            <div className="market__content">
                <p className="market__header">MARKETS </p>
                {/*market header */}
                <h1 className="market__title">Find your dream job where you least expect it. </h1>
                {/*market title */}
                <div className="market__description">
                    Hired supports <b>50+</b> roles in <b>14</b> cities worldwide including remote roles.

                </div>
                {/*market description */}
            </div>
            
            <img scr="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Map_of_USA_States_with_names_white.svg/1200px-Map_of_USA_States_with_names_white.svg.png"></img>
            {/*market map1 */}
            
        </div>
    )
}

export default Market
