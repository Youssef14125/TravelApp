import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes for validation
import { useAuth } from "../contexts/FakeAuthContext";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
}

// Add PropTypes validation
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired, // Validate 'children' as a React node
};

export default ProtectedRoute;
