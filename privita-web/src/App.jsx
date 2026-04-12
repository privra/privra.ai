import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Showcase from './pages/Showcase';
import About from './pages/About';
import Login from './pages/Login';
import Analytics from './pages/Analytics';
import AuditTrail from './pages/AuditTrail';
import PIIMasking from './pages/PIIMasking';
import InjectionDefense from './pages/InjectionDefense';
import SecretDetection from './pages/SecretDetection';
import DockerSetup from './pages/DockerSetup';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider, useAuth } from './context/AuthContext';
import './index.css';

const AppContent = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="min-h-screen bg-[#0b1120] text-white selection:bg-cyan-500/30 font-sans flex flex-col">
      {!isLoginPage && isAuthenticated && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/demo"
          element={
            <ProtectedRoute>
              <Showcase />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/audit-trail"
          element={
            <ProtectedRoute>
              <AuditTrail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pii-masking"
          element={
            <ProtectedRoute>
              <PIIMasking />
            </ProtectedRoute>
          }
        />
        <Route
          path="/injection-defense"
          element={
            <ProtectedRoute>
              <InjectionDefense />
            </ProtectedRoute>
          }
        />
        <Route
          path="/secret-detection"
          element={
            <ProtectedRoute>
              <SecretDetection />
            </ProtectedRoute>
          }
        />
        <Route
          path="/setup-docker"
          element={
            <ProtectedRoute>
              <DockerSetup />
            </ProtectedRoute>
          }
        />
      </Routes>
      {!isLoginPage && isAuthenticated && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
