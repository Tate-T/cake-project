import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const token = useSelector((state) => state.auth.token);
    console.log(token)
    return token ? <Outlet /> : <Navigate to="/confectioner/login" />;
}

export default PrivateRoute;