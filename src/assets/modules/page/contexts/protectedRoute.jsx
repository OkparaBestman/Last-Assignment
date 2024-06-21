import React, {useContext, createContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth/context/authContext';
// import { use } from '../../../../../../server/routes/userRouter';

export const ProtectedRoute = createContext();
function ProtectedRouteProvider({house}){
    const navigate = navigate();
    const user = useContext(AuthContext)
    console.log(user)
    if(!user){
        navigate("/Login")
    }
    return(
        <ProtectedRoute.Provider>
            {house}
        </ProtectedRoute.Provider>
    )
}

export default ProtectedRouteProvider;
