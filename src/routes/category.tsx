import { Navigate, Route } from "react-router-dom";
import CategoryListPage from "../pages/admin/category/CategoryListPage";

export default [
  <Route key="admin.category" path="category" element={<Navigate to="/admin/category/list" />} />,

  <Route key="admin.category.list" path="category/list" element={<CategoryListPage />} />
]