import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./authContext"; 

interface PrivateRouteProps {
  element: JSX.Element; 
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { isAuthenticated } = useAuth(); // Kiểm tra đăng nhập

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
