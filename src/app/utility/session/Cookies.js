import Cookies from "js-cookie"
import { decode } from "jsonwebtoken"

export const setToken = (token) => {
    Cookies.set("token", token)
}

export const deletToken = () => {
    Cookies.remove('token')
}


export async function getUserDetails() {
    try {
        const userDetails = await decode(Cookies.get('token'));
        return userDetails;
    } catch (error) {
        console.error('Error decoding token:', error);
        // Handle error
    }
}

export const BearerToken={
    headers: {
        Authorization: `Bearer ${Cookies?.get('token')}`
    }
}

