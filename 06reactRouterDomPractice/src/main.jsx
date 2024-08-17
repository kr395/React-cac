import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Route,RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Layout from "./Layout.jsx"
import { Home, ContactUs, AboutUs} from "./Components/index.js";


const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="aboutUs" element={<AboutUs />} />
      </Route>
    )
);

{/* createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
); */}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>

)