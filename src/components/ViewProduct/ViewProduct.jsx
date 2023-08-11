// src/ViewProduct.js
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ViewProduct = () => {
    const { productId } = useParams(); // Get the productId from the URL params
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Fetch the product details using productId
        // You can use the same API or any other data source
        fetch(`https://dummyjson.com/products/${productId}`)
            .then(response => response.json())
            .then(data => setProduct(data));
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Product Details</h2>
            <img className='mb-5' src={product.thumbnail} alt="" />
            {/* <p>ID: {product.id}</p> */}
            <p>Name: {product.title}</p>
            <p>Description: {product.description}</p>
            {/* Display more product details */}
        </div>
    );
};

export default ViewProduct;