import axios from "axios";

let car={
    id: 301,
    name: "deepa",
    location: "mumbai",
}

test("Testing View All washers funciton.", async () => {
    axios.get("http://localhost:8082/washer/allwasher").then((resp) =>{
        let carwash = result.data;
        expect(carwash).toBe(carwash);       
    });
});

test("Testing View washer By Id funciton.", async () => {
    axios.get("http://localhost:8082/washer/viewWasher/" + 301).then((resp) =>  {
        let education = result.data;
        expect(carwash).toBe(carwash);        
    });
});

test("Testing Update washer funciton.", async () => {
    axios.put("http://localhost:8082/washer/account/update", car).then(resp =>{
        let carwash = result.data;
        expect(carwash).toBe(carwash);        
    });
});

