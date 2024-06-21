import React, {useState} from 'react';
import {loginUser} from '../Api/index';


function LoginUser(){
    const [loginResponse, setLoginResponse] = useState({});

    const handleLogin = async (payload) => {
        const response = await loginUser(payload)
        console.log(response)
        setLoginResponse(response)
    }
    return {loginResponse, handleLogin}
}

export default LoginUser;