import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProtectedAdminRoute = ({ children }) => {
  const navigate = useNavigate();
  const { loading, isAuthenticated,user } = useSelector((state) => state.user);
  if (loading === false) {
    if (!isAuthenticated) {
      navigate("/user/login");
    } else if(user.role !== "Admin"){
      navigate("/");
    }
    return children;
  }
};

export default ProtectedAdminRoute;
