import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

// If someone has acces to our profile they can 
//change edit so in order to avoid it i make this function

const PrivateRoute = () => {

    const {userInfo} = useSelector(state=>state.auth)

  return userInfo ? <Outlet/> : <Navigate to='/login' replace />
}

export default PrivateRoute
