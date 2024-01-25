import { Routes, Route } from "react-router-dom";

import Course from "../../pages/course";
import Home from "../../pages/home";
import Reports from "../../pages/reports";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Course />} />
      <Route path="/reports" element={<Reports />} />
    </Routes>
  );
};

export default AppRoutes;
