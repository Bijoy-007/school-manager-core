import { Route, Routes } from "react-router-dom";
import UserDetailsPage from "../pages/app/admin/user-management/UserDetailsPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>root page</h1>} />
      <Route path="/app/admin/users/:id" element={<UserDetailsPage />} />
    </Routes>
  );
};

export default AllRoutes;
