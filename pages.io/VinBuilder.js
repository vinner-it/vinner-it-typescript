/*
This is a demo using version 0.1.1 of the Vinner-it typescript implementation!

VinBuilder.fastVin() is used for checking if the VIN is valid or not.
*/

"use strict";

export class VinBuilder {
    static fastVin(vin) {
        return ValidVin.createVin(vin);
    }
}

export class InvalidVin {
    constructor(vin) {
        this.vin = vin;
    }
}

export class ValidVin {
    constructor(vin) {
        this.vin = vin;
    }
    static createVin(vin) {
        if (/^[A-HJ-NPR-Z0-9]{17}$/.test(vin))
            return new ValidVin(vin);
        return new InvalidVin(vin);
    }
}