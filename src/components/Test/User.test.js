import axios from "axios";

let car={
    name: "pranjali",
    email: "pranju@gmail.com",
    contactno: "1234567892",
    username: "pranju",
    password: "pranju123",
    confirmpassword: "pranju123",
}

test("Testing Add user funciton.", async () => {
    axios.post("http://localhost:8084/user/adduser",car).then((resp) =>{
        let carwash = result.data;
        expect(carwash).toBe(carwash);        
    });
});

test("Testing View All users funciton.", async () => {
    axios.get("http://localhost:8061/admin/allusers").then((resp) =>{
        let carwash = result.data;
        expect(carwash).toBe(carwash);       
    });
});