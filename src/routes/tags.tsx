import { Navigate, Route } from "react-router-dom";
import TagsListPage from "../pages/admin/tags/TagsListPage";

export default [
  <Route key="admin.tags" path="tags" element={<Navigate to="/admin/tags/list" />} />,

  <Route key="admin.tags.list" path="tags/list" element={<TagsListPage />} />
]