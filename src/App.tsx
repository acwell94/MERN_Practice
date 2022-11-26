import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewPlace from "./places/pages/NewPlace";
import Users from "./user/pages/Users";
import UserList from "./user/components/userList/UserList";
import UserItem from "./user/components/userItem/UserItem";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/place/new" element={<NewPlace />} />
      </Routes>
    </Router>
  );
};

export default App;
