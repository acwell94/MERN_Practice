import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewPlace from "./places/pages/NewPlace";
import MainHeaderNavigation from "./shared/components/Navigation/MainHeaderNavigation/MainHeaderNavigation";
import Users from "./user/pages/Users";
import UserPlaces from "./places/pages/UserPlaces";
const App = () => {
  return (
    <Router>
      <MainHeaderNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
