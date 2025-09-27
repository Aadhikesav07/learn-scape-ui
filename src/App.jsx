import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import CourseCatalogPage from "./pages/CourseCatalogPage.jsx";
import CourseDetails from "./components/course/CourseDetails.jsx";
import LearningPage from "./pages/LearningPage.jsx";
import QuizPage from "./pages/QuizPage.jsx";
import StudentDashboardPage from "./pages/StudentDashboardPage.jsx";
import InstructorDashboardPage from "./pages/InstructorDashboardPage.jsx";
import CertificatePage from "./pages/CertificatePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

const App = () => (
  <Router>
    <Header />
    <main className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CourseCatalogPage />} />
        <Route path="/course/:courseId" element={<CourseDetails />} />
        <Route path="/learning/:courseId" element={<LearningPage />} />
        <Route path="/quiz/:courseId/:quizId" element={<QuizPage />} />
        <Route path="/dashboard/student" element={<StudentDashboardPage />} />
        <Route path="/dashboard/instructor" element={<InstructorDashboardPage />} />
        <Route path="/certificate/:certificateId" element={<CertificatePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
