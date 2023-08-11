import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { FaEye, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => setProducts(data.products));
    }, []);

    const handleDelete = (productId) => {
        // Implement your delete logic here
        // Update the state after deleting the product
        const updatedProducts = products.filter(product => product.id !== productId);
        setProducts(updatedProducts);
    };

    return (
        <Table className="my-5"  bordered >
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {products.map(product => (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td className="d-flex justify-content-around">
                    <Link to={`/view/${product.id}`}>
                        <span ><FaEye /></span>
                    </Link>
                        <span onClick={() => handleDelete(product.id)} style={{ cursor: 'pointer' }}><FaRegTrashAlt /></span>
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
    )
    
};

export default Home;