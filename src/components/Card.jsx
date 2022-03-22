import React from 'react'
import "../css/Card.css"



function Card(props) {

  return (
 <div className='container'>  
    {props.veri.map((x)=>{
     const{id,title,desc,image} = x  
    return (
  <div className="card"  key= {id} style={{backgroundColor:"black"}} >
  <h3>{title.toUpperCase()}</h3>
  <img src={image} class="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">{desc}</p>
  </div>
    </div>

    )
    })
    
 }

</div>
  )
}

export default Card
