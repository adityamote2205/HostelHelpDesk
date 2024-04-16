import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routers/Home";
import AboutUs from "./routers/About_Us";
import ContactUs from "./routers/Contact_Us";
import RectorHostel from "./routers/Rector_Hostel";
import RectorMess from "./routers/Rector_Mess";
import RectorSignUp from "./routers/Rector_Sign_Up";
import SignIn from "./routers/Sign_in";
import StudentHostel from "./routers/Student_hostel";
import StudentMess from "./routers/Student_Mess";
import StudentSignUp from "./routers/Student_Sign_Up";
import Profile from "./routers/Profile";
import Rector_Home from "./routers/Rector_Home";
import RectorProfile from "./routers/RectorProfile";
function App() {
  return (
   
    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/hostel/:id/rector" element={<RectorHostel />} />
          <Route path="/mess/:id/rector" element={<RectorMess />} />
          <Route path="/signUp/rector" element={<RectorSignUp />} />
          <Route path="/signIn/student" element={<SignIn />} />
          <Route path="/hostel/:id/student" element={<StudentHostel />} />
          <Route path="/mess/:id/student" element={<StudentMess />} />
          <Route path="/signUp/student" element={<StudentSignUp />} />
          <Route path="student/:id/profile" element={<Profile/>} />
          <Route path="/rector/home" element={<Rector_Home/>} />
          <Route path="/rector/:id/profile" element={<RectorProfile/>} />

        </Routes>
      </Router>
   
     
  );
}

export default App;
