import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import classes from './Product.module.css'


function Product() {
    const [products, setProducts] = useState([]); // Initialize with an empty array

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setProducts(res.data); // Set fetched data
            })
            .catch((err) => {
                console.log(err); // Handle any errors
            });
    }, []);

    return (
        <section className={classes.products__container}>
            {products.map((singleProduct) => (
                <ProductCard product={singleProduct} key={singleProduct.id} />
            ))}
        </section>
    );
};

export default Product;