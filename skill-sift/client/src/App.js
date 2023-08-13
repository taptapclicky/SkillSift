// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import ContactUsPage from "./pages/ContactUsPage";
import Navbar from "./Components/Navbar";
import AddReviewPage from "./pages/AddReviewPage";
import ProfessionalDetailsPage from "./pages/ProfessionalDetailsPage";
import UserNavbar from "./Components/userNavbar";

function App() {
  const user = localStorage.getItem("LoggedInState");
  return (
    <div className="App">
      {!user === true ? <Navbar /> : <UserNavbar user={user} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="contact" element={<ContactUsPage />} />
        <Route path="reviews" element={<AddReviewPage />} />
        <Route path="services" element={<ProfessionalDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
