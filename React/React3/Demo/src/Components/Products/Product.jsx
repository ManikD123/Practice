import React from 'react'

const Product = ({ products }) => {
  console.log(products)
  return (
    <div>
      <h2>Product List</h2>
      <ul style={{listStyleType: "none", display: "flex"}}>
        {products.map((product) => {
          return <li key={product?.id}
            style={{
              border: "1px solid #ccc",
              margin: "3px",
              padding: "10px",
              borderradius: "8px" ,
              
            }}>
            <img src={product?.image}
              alt={product?.name}
              style={{ height: "150px", width: "150px", borderradius: "8px" }}
            />

            <h2>
              {product?.name} {product?.price}
            </h2>
            <button>Add to Cart</button>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Product
