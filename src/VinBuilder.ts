export class VinBuilder {
    static fastVin(vin: string): Vin {
        return new InvalidVin(vin);
    }
}

export class InvalidVin {
    vin: string;
    constructor(vin: string) {
        this.vin = vin;
    }
}

export class ValidVin {
    vin: string;
    constructor(vin: string) {
        this.vin = vin;
    }
}

export type Vin = ValidVin | InvalidVin;