class Vehicles {
    constructor(name, manufactureCompany, iD) {
        this.name = name
        this.manufactureCompany = manufactureCompany
        this.iD = iD
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Manufacturer: ${this.manufacturer}, ID: ${this.iD}`);
    }
}

class Cars extends Vehicles {
    constructor(name, manufactureCompany, iD, typeOfCar) {
        super(name, manufactureCompany, iD)
        this.typeOfCar = typeOfCar
    }
    displayCarInfo() {
        console.log(`Name:${this.name}, Manufacturer: ${this.manufacturer}, ID: ${this.iD}, TypeOfCar:${this.typeOfCar}`)
    }
}

class AirPlane extends Vehicles {
    constructor(name, manufactureCompany, iD, type) {
        super(name, manufactureCompany, iD)
        this.type = type
    }
    displayAirPlaneInfo() {
        this.displayInfo()
        console.log(`Type: ${this.type}`);
    }
}

module.exports={Vehicles,Cars,AirPlane}