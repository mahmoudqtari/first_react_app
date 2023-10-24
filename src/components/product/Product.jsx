import React from 'react'

function Product(props) {
  return (
    <>
    <div className='col-md-4' >
        <div className='product' >
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
    </div>
    </>
  )
}

export default Product