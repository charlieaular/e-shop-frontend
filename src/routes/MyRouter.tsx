import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AdminIndex from '../pages/admin/AdminIndex'
import HomePage from '../pages/home/HomePage'
import AdminRoute from './AdminRoute'
import category from './category'
import tags from './tags'

const MyRouter = () => {
  return (
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route element={<AdminRoute />} >
          <Route path="admin" element={<AdminIndex />}>
            {category}
            {tags}
          </Route>
        </Route>

        <Route path='*' element={<Navigate to="/" />} />

      </Routes>
  )
}

export default MyRouter