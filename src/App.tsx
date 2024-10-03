import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

{/** layout for user */ }
import Layout from "./layout/user/layout";

{/** layout for admin */ }
import AdminLayout from "./layout/admin/layout";

{/** pages for user */ }
import Home from "./pages/home/home";
import Authen from "./pages/authen/authen";
import Course from "./pages/course/course";
import CourseDetail from "./pages/course-detail/course-detail";
import Cart from "./pages/cart/cart";
import Blog from "./pages/blog/blog";
import BlogDetail from "./pages/blog-detail/blog-detail";
import Event from "./pages/event/event";
import EventDetail from "./pages/event-detail/event-detail";
import About from "./pages/about/about";
import ZoomPage from "./pages/zoom/zoom";
import ZoomDetail from "./pages/zoom-detail/zoom-detail";
import Checkout from "./pages/checkout/checkout";

{/** pages for admin */ }
import AdminHome from "./pages/admin/home/home";
import AdminQuiz from "./pages/admin/quiz/quiz";
import AdminCourse from "./pages/admin/course/course";
import AdminCategory from "./pages/admin/category/category";
import AdminUser from "./pages/admin/users/users";
import AdminProfile from "./pages/admin/profile/profile";
import AdminUpdateProfile from "./pages/admin/update-profile/update-profile";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/** For user */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="course" element={<Course />} />
            <Route path="course/:id" element={<CourseDetail />} />
            <Route path="zoom" element={<ZoomPage />} />
            <Route path="zoom/:id" element={<ZoomDetail />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogDetail />} />
            <Route path="event" element={<Event />} />
            <Route path="event/:id" element={<EventDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="authen" element={<Authen />} />
          </Route>
          {/** For admin */}
          <Route element={<AdminLayout />}>
            <Route path="/admin/home" element={<AdminHome />} />
            <Route path="/admin/course" element={<AdminCourse />} />
            <Route path="/admin/profile" element={<AdminProfile />} />
            <Route path="/admin/user" element={<AdminUser />} />
            <Route path="/admin/category" element={<AdminCategory />} />
            <Route path="/admin/quiz" element={<AdminQuiz />} />
            <Route path="/admin/update" element={<AdminUpdateProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
