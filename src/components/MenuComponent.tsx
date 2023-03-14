import { List, ListItem, ListItemButton, ListItemText, Paper } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

const MenuComponent = () => {

  const navigate = useNavigate()

  const location = useLocation()

  const menu = [
    { text: "Categories", path: "/admin/category" },
    { text: "Tags", path: "/admin/tags" },
  ]

  const onClickMenu = (path: string) => {
    if(location.pathname.includes(path)) return
    navigate(path)
  }

  return (
    <Paper elevation={3}>
      <h5 className="pt-3 text-center">Menu</h5>

      <List>
        {menu.map(el => (
          <ListItem selected={location.pathname.includes(el.path)} key={el.text} disablePadding onClick={() => onClickMenu(el.path)}>
            <ListItemButton>
              <ListItemText primary={el.text} />
            </ListItemButton>
          </ListItem>

        ))}
      </List>

    </Paper>
  )
}

export default MenuComponent