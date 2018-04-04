import React from 'react';
import Card, { CardHeader, CardMedia, CardContent } from 'material-ui/Card';

import Typography from 'material-ui/Typography';

const ProductItem = (product) => {
    return (
        <Card className="product-item">
            <CardHeader
                title="Áo Gấu"
                subheader="120k"
            />
            <CardMedia
                className="product-item-media"
                image="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/29694556_1660217834055573_1878373067785585358_n.jpg?_nc_cat=0&oh=c635b0cfb90da8a4388ab4cde521184d&oe=5B6B9584"
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductItem;
