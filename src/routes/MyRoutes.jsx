import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Profile = React.lazy(() => import("../pages/Profile"));
const Home = React.lazy(() => import("../pages/Home"));

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user/:username" element={<Profile />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default MyRoutes;
