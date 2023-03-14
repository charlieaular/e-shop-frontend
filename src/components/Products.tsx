import { Box, Paper, Skeleton } from "@mui/material"
import { useProducts } from "../hooks/useProduct"
import { useCategoryStore } from "../stores/useCategoryStore"
import Loader from "./Loader"
import ProductCard from "./ProductCard"

const Products = () => {

  const categorySelected = useCategoryStore((state) => state.categorySelected)

  const { productsByCategory } = useProducts()

  const { data, isLoading, error } = productsByCategory(categorySelected)

  return (
    <Paper elevation={3}>
      <h5 className="pt-3 text-center">Products</h5>

      <div className="d-flex flex-row p-3">

        {
          isLoading &&
          Array.from(new Array(3)).map((_, index) => (
            <Box key={index} sx={{ width: 300 }} className="p-3">
              <Skeleton variant="rounded" width={210} height={60} />
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            </Box>))}


        {data?.map(product => (
          <ProductCard key={product.ID} product={product} />
        ))}

      </div>

    </Paper>
  )
}

export default Products