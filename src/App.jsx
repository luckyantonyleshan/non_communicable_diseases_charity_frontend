// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Diseases from './pages/Diseases';
import Areas from './pages/Areas';
import AreaDetails from './pages/AreaDetails';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import Donation from './pages/Donation';
import Learnpage from './pages/Learnpage';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/learn" element={<Learnpage />} />
          
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/diseases" element={<Diseases />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/areas/:id" element={<AreaDetails />} />
            <Route path="/donate" element={<Donation />} />
          </Route>

          {/* Admin-only Route */}
          <Route element={<ProtectedRoute adminOnly />}>
            <Route path="/admin" element={<Admin />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;