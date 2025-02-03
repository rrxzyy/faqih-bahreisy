import { useEffect, useState } from "react";


export const useLogin = () => {
    const [username, SetUsername] = useState("");
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            SetUsername(getUsername(token));
        } else {
            window.location.href = "/login";
            window.alert('Please login first');
        }
    }, []);

    return username;
}