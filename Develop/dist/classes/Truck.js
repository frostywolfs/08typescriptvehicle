import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// The Truck class extends the Vehicle class and implements the AbleToTow interface
class Truck extends Vehicle {
    // Constructor to initialize the Truck class properties
    constructor(vin, color, make, model, year, weight, topSpeed, towingCapacity, wheels) {
        // Call the constructor of the parent class (Vehicle)
        super();
        // Initialize Truck-specific properties
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.towingCapacity = towingCapacity;
        // Check if wheels array has 4 elements; if not, create 4 default Wheel objects
        this.wheels = wheels.length === 4 ? wheels : new Array(4).fill(new Wheel());
    }
    // Implement the tow method from the AbleToTow interface
    tow(vehicle) {
        const vehicleWeight = vehicle.weight;
        const vehicleMake = vehicle.make;
        const vehicleModel = vehicle.model;
        // Check if the vehicle's weight is less than or equal to the truck's towing capacity
        if (vehicleWeight <= this.towingCapacity) {
            console.log(`${this.make} ${this.model} is towing the ${vehicleMake} ${vehicleModel}.`);
        }
        else {
            console.log(`${this.make} ${this.model} cannot tow the ${vehicleMake} ${vehicleModel}. It is too heavy.`);
        }
    }
    // Override the printDetails method from the Vehicle class
    printDetails() {
        // Call the parent class's printDetails method
        super.printDetails();
        // Log the additional details of the Truck
        console.log(`Towing Capacity: ${this.towingCapacity}`);
        console.log(`Wheels: ${this.wheels.map(wheel => wheel.toString()).join(', ')}`);
    }
}
// Export the Truck class as the default export
export default Truck;
