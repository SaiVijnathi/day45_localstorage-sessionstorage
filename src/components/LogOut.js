import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LogOut() {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear localStorage and redirect to login
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        navigate("/Home");
    }, [navigate]);

    return null; // No UI required
}

export default LogOut;
