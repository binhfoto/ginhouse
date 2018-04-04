import '../../style/product.css';
import React from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';
import ProductItem from './ProductItem';

const ProductGrid = ({products}) => (
    <div className="product-grid">
        <Grid container spacing={8}>
            {products.map(product => (
                <Grid item xs={12} sm={4} md={4} lg={3} key={product._id}>
                    <ProductItem product={product}/>
                </Grid>
            ))}
        </Grid>
    </div>
);

export default connect(
    ({products}) => ({products})
)(ProductGrid);