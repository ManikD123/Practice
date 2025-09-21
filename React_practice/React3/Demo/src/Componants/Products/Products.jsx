import React from 'react'

const Products = ({ productData }) => {
    // console.log(productData)
    return (
        <div>
            <h2>Product List</h2>
            <ul >
                {productData.map((product) => {
                    return <li key={product?.id} 
                    style={{
                        border: "1px solid #ccc",
                        margin: "3px",
                        padding: "10px",
                        borderRadius: "8px"
                    }}> 
                        <img
                            src={product?.image}
                            alt={product?.name}
                            style={{ width: "150px", 
                                height: "150px",
                                borderRadius: "20px",
                                padding: "10px"
                            }} />
                        <p style={{font: "sans-saif"}}>Name: {product?.name}</p>
                        <p>Price: {product?.price}</p>
                        <button>Add to Cart</button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Products
