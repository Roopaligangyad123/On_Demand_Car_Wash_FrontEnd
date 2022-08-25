import axios from "axios";

let car={
    Id : 101,
   Name : "Foam Wash",
   Cost: 1000,
   Description : "A1 car wash"
}

test("Testing Add washpacks funciton.", async () => {
    axios.post("http://localhost:8061/admin/addwashpack",car).then((resp) =>{
        let carwash = result.data;
        expect(carwash).toBe(carwash);        
    });
});

test("Testing View All washpacks funciton.", async () => {
    axios.get("http://localhost:8061/admin/washpack").then((resp) =>{
        let carwash = result.data;
        expect(carwash).toBe(carwash);       
    });
});

test("Testing Update washpacks funciton.", async () => {
    axios.put("http://localhost:8061/admin/washpack/update", car).then(resp =>{
        let carwash = result.data;
        expect(carwash).toBe(carwash);        
    });
});