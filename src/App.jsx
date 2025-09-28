import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
import HomePage from "./pages/HomePage"
import CourseCatalogPage from "./pages/CourseCatalogPage"
import LearningPage from "./pages/LearningPage"
import QuizPage from "./pages/QuizPage"
import StudentDashboardPage from "./pages/StudentDashboardPage"
import InstructorDashboardPage from "./pages/InstructorDashboardPage"
import CertificatePage from "./pages/CertificatePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CourseCatalogPage />} />
            <Route path="/learning/:id" element={<LearningPage />} />
            <Route path="/quiz/:id" element={<QuizPage />} />
            <Route path="/dashboard" element={<StudentDashboardPage />} />
            <Route path="/instructor" element={<InstructorDashboardPage />} />
            <Route path="/certificate/:id" element={<CertificatePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
