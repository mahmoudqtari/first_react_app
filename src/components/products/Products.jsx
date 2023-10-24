import React from 'react'
import Product from '../product/Product'

function Products() {
    const products = [
        {id:1,title:'product one',description:'this is product one',price:1000},
        {id:2,title:'product two',description:'this is product two',price:2000},
        {id:3,title:'product three',description:'this is product three',price:3000},
    ];
  return (
    <>
        <div className='row'>
        
            {products.map((product) =>{
                return <Product {...product} key={product.id} />
            })}
        </div>
    </>
  )
}

export default Products