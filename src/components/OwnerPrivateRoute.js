import { Navigate } from "react-router-dom";
import AuthService from "./AuthService";

const OwnerPrivateRoute=({children}) => {
    const user = AuthService.getCurrentUser();
    return user?children:<Navigate to="/unauthorize"/>;
};

export default OwnerPrivateRoute;