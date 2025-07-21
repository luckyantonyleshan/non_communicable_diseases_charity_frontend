import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

function LoginPage() {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/Home");
    }
  }, [token, navigate]);

  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
