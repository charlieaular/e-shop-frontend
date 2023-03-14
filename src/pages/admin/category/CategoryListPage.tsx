import { List, ListItem, ListItemIcon, ListItemText, Paper, TextField } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import Loader from "../../../components/Loader"
import { useCategory } from "../../../hooks/useCategory"
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import CreateCategoryComponent from "../../../components/CreateCategoryComponent";

const CategoryListPage = () => {

  const { getAllCategories, deleteCategory } = useCategory()

  const deleteCategoryMutation = deleteCategory()

  const { data, isLoading, error, refetch: refetchCategories } = getAllCategories()

  const onDelete = (categoryId: number) => {
    deleteCategoryMutation.mutate(categoryId, {
      onSuccess: (data) => {
        refetchCategories()
      },
      onError: (err) => {
        console.log({ err });
      },
    })
  }

  return (
    <Paper elevation={4}>
      <h5 className="pt-3 text-center">Categories</h5>

      <CreateCategoryComponent onCreate={() => refetchCategories()} />

      {isLoading && <Loader />}

      <List>
        {data?.map(category => (
          <ListItem key={category.ID}>
            <ListItemText primary={category.Name} />
            <ListItemIcon>
              <EditIcon role="button" />
              <ClearIcon role="button" onClick={() => onDelete(category.ID)} />
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default CategoryListPage