import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./assets/components/Layout.jsx";
import Home from "./assets/components/pages/Home.jsx";
import About from "./assets/components/pages/About.jsx";
import Contact from "./assets/components/pages/Contact.jsx";
import Blog from "./assets/components/pages/Blog.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="blogs" element={<Blog />}>
        {/* <Route path="post/:singleName" element={< />} /> */}
      </Route>
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
