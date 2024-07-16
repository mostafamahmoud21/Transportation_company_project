class Employee {
    constructor(name, id, dateOfBirth) {
        this.name = name
        this.id = id
        this.dateOfBirth = dateOfBirth
    }
    displayInfo() {
        console.log(`Name:${this.name}, ID:${this.id}, DateOfBirth:${this.dateOfBirth}`)
    }
}

class Driver extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
        super(name, id, dateOfBirth)
        this.licenseID = licenseID
    }
}

class Pilot extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
        super(name, id, dateOfBirth)
        this.licenseID = licenseID
    }
}

class Reservation {
    constructor(reservationDate, employeeId, vehicleId, reservationID) {
        this.reservationDate = reservationDate;
        this.employeeId = employeeId;
        this.vehicleId = vehicleId;
        this.reservationID = reservationID;
    }
}

module.exports = { Employee, Driver, Pilot, Reservation }