export class VinBuilder {
    static fastVin(vin: string): Vin {
        return ValidVin.createVin(vin);
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
    private constructor(vin: string) {
        this.vin = vin;
    }

    static createVin(vin: string): Vin {
        if(/^[A-HJ-NPR-Z0-9]{17}$/.test(vin)) return new ValidVin(vin);
        return new InvalidVin(vin);
    }

}

export type Vin = ValidVin | InvalidVin;