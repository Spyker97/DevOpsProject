import axios from "axios";

// login user
const login = async (userData) => {
    const response = await axios.post('http://localhost:5000/api/users/loginUser', userData);
    
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}

const authServices = {
    login
};

export default authServices;