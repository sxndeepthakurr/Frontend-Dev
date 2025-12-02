class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(from, to, distance) {
        this.from = from;
        this.to = to;
        this.distance = distance;
    }

    calculateFare() {
        if (!this.distance || this.distance < 0)
            throw new Error("Invalid distance!");
        return this.distance * 10; // ₹10 per km
    }
}

try {
    const trip = new Trip("Bhubaneswar", "Cuttack", 20);
    console.log("Fare:", trip.calculateFare());
} catch (err) {
    console.error(err.message);
}
