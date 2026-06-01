import { Navigate, Outlet } from 'react-router-dom';


type ProtectedRouteProps = {
    isAllowed: boolean
    redirectTo?: string
}

const ProtectedRoute = ({ isAllowed, redirectTo = "/" }: ProtectedRouteProps) => {
    if (!isAllowed) {
        return <Navigate to={redirectTo} replace/>;
    } return <Outlet />
}

export default ProtectedRoute;