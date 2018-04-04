import '../../style/product.css';
import React from 'react';
import Grid from 'material-ui/Grid';
import ProductItem from './ProductItem';

const ProductGrid = ({products}) => {
    let items = Array.from(Array(15).keys());
    return (
        <div className="product-grid">
            <Grid container spacing={8}>
                {items.map(product => (
                    <Grid item xs={12} sm={4} md={4} lg={3}>
                        <ProductItem product={product}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ProductGrid;