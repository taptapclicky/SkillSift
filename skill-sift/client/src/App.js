import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import ContactUsPage from "./pages/ContactUsPage";
import Navbar from "./Components/Navbar";
import AddReviewPage from "./pages/AddReviewPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="signin" element={<SignInPage />} />
        <Route path="contact" element={<ContactUsPage />} />
        <Route path="reviews" element={<AddReviewPage />} />
      </Routes>
    </div>
  );
}

export default App;
