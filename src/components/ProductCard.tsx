import React from "react"

import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Product } from "../types/Product"

interface Props {
  product: Product
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="mx-2">
      <CardActionArea>
        <CardMedia
          sx={{ height: 140 }}
          image={product.Image}
          title={product.Name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.Name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.Description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default ProductCard