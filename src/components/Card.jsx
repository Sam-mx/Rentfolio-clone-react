import React from 'react'

function Card(props) {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "NOT AVAILABLE"
    } else {
        badgeText = "AVAILABLE"
    }

  return (
    <div className="card">
            {
                badgeText && 
                <div className="card--badge">{badgeText}</div>
            }
            
            
            <img 
                src={`../img/${props.img}`} 
                className="card--image" 
            />
            <h3 className="card--title">{props.title}</h3>

            <div className="card--stats">
            <div className="card--blah">
                <p>Property Type : <span className='fancy'>{props.type}</span></p>
                <p>Furniture Type : <span className='fancy'>{props.furnit}</span></p> 
                <p>Date : <span className='fancy'>{props.date}</span></p>
            </div>

            <div className="card--blah2">
                <p>Bedrooms : <span className='fancy'>{props.bedroom}</span></p>
                <p>Rating : <span className='fancy'>{props.stats.rating}</span>  <img className='card--star' src="../img/star.png"/> </p>
                <p>Location : <span className='fancy'>{props.location}</span></p>
            </div>
            </div>

        
            <p className="card--price">
                <span className="bold">Price : ${props.stats.price}</span> / month
            </p>

            <p className="card--price">
                <span className="bold">Remark : </span> {props.remarks}
            </p>

            <p className='card--reporter'>Updated by {props.reporter}</p>
        </div>
  )
}

export default Card
