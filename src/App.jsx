import './App.css';

import { Route, Routes } from 'react-router-dom';

import RequireAuth from './Components/Auth/requireAuth.jsx'
import AboutUs from './Pages/AboutUs.jsx';
import Contact from './Pages/ContactUs.jsx';
import CourseDescription from './Pages/Course/CourseDescription';
import CourseList from './Pages/Course/CourseList';
import CreateCourse from './Pages/Course/CreateCourse' 
import AddLecture from './Pages/Dashboard/Addlecture.jsx';
import AdminDashboard from './Pages/Dashboard/AdminDashboard.jsx';
import Displaylectures from './Pages/Dashboard/Displaylectures.jsx';
import Denied from './Pages/Denied.jsx';
import HomePage from './Pages/HomePage.jsx';
import Login from './Pages/Login.jsx';
import NotFound from './Pages/NotFound.jsx';
import Checkout from './Pages/Payment/Checkout.jsx';
import CheckoutFailure from './Pages/Payment/CheckoutFailure';
import CheckoutSuccess from './Pages/Payment/CheckoutSuccess';
import Signup from './Pages/Signup.jsx';
import EditProfile from './Pages/User/EditProfile.jsx';
import ForgetPass from './Pages/User/ForgotPass.jsx';
import NewPass from './Pages/User/NewPass.jsx';
import Profile from './Pages/User/Profile.jsx';
import ResetPass from './Pages/User/ResetPass.jsx';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} ></Route>
        <Route path="/about" element={<AboutUs />} ></Route>
        <Route path="/signup" element={<Signup />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/courses" element={<CourseList />} />
        <Route path="/Reset-Pass" element={<ResetPass />} />
        <Route path="/Forgot-Pass" element={<ForgetPass />} />
        <Route path="/New-Pass/:token" element={<NewPass />} />
        <Route path="/course/description" element={<CourseDescription />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Denied" element={<Denied />} />
        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path="/course/create" element={<CreateCourse />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={["ADMIN","USER"]} />}>
          <Route path="/profile" element={<Profile />} />
          <Route path='/user/editprofile' element={<EditProfile />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/checkout/success' element={<CheckoutSuccess />} />
          <Route path='/checkout/fail' element={<CheckoutFailure />} />
          <Route path='/course/displaylectures' element={<Displaylectures/>}/>
          <Route path="/course/addlecture" element={<AddLecture />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} ></Route>

      </Routes>
    </>
  )
}

export default App
