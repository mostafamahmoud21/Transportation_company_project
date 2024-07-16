const Vehicle = require('./Classes/Vehicles.js')
const Employee = require('./Classes/Employees.js')

let reservations = []

function createReservation(employee, vehicle) {
    if (employee instanceof Employee.Pilot && vehicle instanceof Vehicle.Cars) {
        console.log("Incompatibility: The pilot cannot drive the vehicle.")
    } else if (employee instanceof Employee.Pilot && vehicle instanceof Vehicle.AirPlane) {
        const reservationID = reservations.length + 1;
        const reservationDate = new Date().toISOString().split('T')[0];
        const newReservation = new Employee.Reservation(reservationDate, employee.id, vehicle.iD, reservationID);
        reservations.push(newReservation)
        console.log(`Your reservation has been created successfully: ${JSON.stringify(newReservation)}`)
    }
}
let car1 = new Vehicle.Cars("BMW 410", "BMW", 3, "gas")
let car2 = new Vehicle.Cars("Nissan sunny", "Nissan", 6, "gas")
let car3 = new Vehicle.Cars("Tesla Model 3", "Tesla", 1, "electricity")

let AirPlane1 = new Vehicle.AirPlane("Airbus A350", "Airbus", 3, "gas")
let AirPlane2 = new Vehicle.AirPlane("Airbus A320neo", "Airbus", 1, "gas")

let driver1 = new Employee.Driver("Mostafa", 101, "1985-05-15", "D12345");
let pilot1 = new Employee.Pilot("Ali", 102, "1979-07-21", "P67890");

createReservation(pilot1,car1)
createReservation(pilot1,AirPlane1)

reservations.map(reservation=>console.log(reservations))