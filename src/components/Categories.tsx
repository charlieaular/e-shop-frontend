import { List, ListItem, ListItemButton, ListItemText, Paper } from "@mui/material"
import { useCategory } from "../hooks/useCategory"
import { useCategoryStore } from "../stores/useCategoryStore"
import Loader from "./Loader"

const Categories = () => {

  const setCategory = useCategoryStore((state) => state.setCategory)

  const categorySelected = useCategoryStore((state) => state.categorySelected)

  const { getAllCategories } = useCategory()

  const { data, isLoading, error } = getAllCategories()

  const onClickCategory = (category: number) => {
    if (category == categorySelected) return
    setCategory(category)
  }

  return (
    <Paper elevation={3}>
      <h5 className="pt-3 text-center">Categories</h5>

      {isLoading && <Loader />}

      <List>
          <ListItem selected={categorySelected == 0} disablePadding onClick={() => onClickCategory(0)}>
          <ListItemButton>
            <ListItemText primary="Todos" />
          </ListItemButton>
        </ListItem>

        {data?.map(category => (
          <ListItem selected={categorySelected == category.ID} key={category.ID} disablePadding onClick={() => onClickCategory(category.ID)}>
            <ListItemButton>
              <ListItemText primary={category.Name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </Paper>
  )
}

export default Categories