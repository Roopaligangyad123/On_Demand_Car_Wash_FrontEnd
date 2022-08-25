import axios from "axios";

class AuthService {

login(username, password) {

  // const API_URL = "User/user/authenticate?password="+password+"&username="+username;

    return axios

        .post("http://localhost:8083/user/login" , {

        username,

        password

        })

        .then(response => {

        const token =response.data;

        localStorage.setItem("SavedToken",token);



        return response.data;

        });

    }

  logout(){

    localStorage.removeItem("SavedToken");

  }

  getCurrentUser() {

    return localStorage.getItem('SavedToken');

  };

}

export default new AuthService();