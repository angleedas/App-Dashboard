 import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users"; // Add your Users page
import Analytics from "./pages/Analytics";  

// ProtectedRoute wrapper
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<Login />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users"
        element={
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        }
      />
      <Route 
        path="/analytics" 
        element={ 
        <ProtectedRoute>
          <Analytics />
        </ProtectedRoute>}
         />


      {/* Redirect any unknown path to "/" */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
