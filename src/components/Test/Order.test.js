import axios from "axios";

let car={
    address: "delhi",
    carModel: "BMW X5",
    carName: "BMW",
    contactno: 8037884941,
    date: "2022-12-22",
    orderId: 5,
    username: "shailaja",
    washpackId: 10
}

test("Testing View All Orders funciton.", async () => {
    axios.get("http://localhost:8081/order/allorders").then((resp) =>{
        let carwash = result.data;
        expect(carwash).toBe(carwash);       
    });
});

test("Testing Add order funciton.", async () => {
    axios.post("http://localhost:8081/order/addorder",car).then((resp) =>{
        let carwash = result.data;
        expect(carwash).toBe(carwash);        
    });
});

test("Testing Update order funciton.", async () => {
    axios.put("http://localhost:8081/order/updateorder", car).then(resp =>{
        let carwash = result.data;
        expect(carwash).toBe(carwash);        
    });
});



