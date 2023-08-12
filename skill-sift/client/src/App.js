import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ApolloProvider } from '@apollo/client'; 
import client from './apolloClient';

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import ContactUsPage from "./pages/ContactUsPage";
import Navbar from "./Components/Navbar";
import AddReviewPage from "./pages/AddReviewPage";
import ProfessionalDetailsPage from "./pages/ProfessionalDetailsPage";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="reviews" element={<AddReviewPage />} />
          <Route path="professional" element={<ProfessionalDetailsPage />} />
        </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;
