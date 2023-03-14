import { List, ListItem, ListItemIcon, ListItemText, Paper } from "@mui/material"
import Loader from "../../../components/Loader"
import { useTags } from "../../../hooks/useTags"
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';

const TagsListPage = () => {

  const { getAllTags } = useTags()

  const { data, isLoading, error } = getAllTags()

  return (
    <Paper elevation={4}>
      <h5 className="pt-3 text-center">Tags</h5>

      {isLoading && <Loader />}
      <List>
        {data?.tags?.map(tag => (
          <ListItem key={tag.ID}>
            <ListItemText primary={tag.Name} />
            <ListItemIcon>
              <EditIcon role="button" />
              <ClearIcon role="button" />
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default TagsListPage