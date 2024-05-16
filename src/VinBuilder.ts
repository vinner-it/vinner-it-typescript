export class VinBuilder {
    static fastVin(vin: string) {
        return { kind: "invalid vin", vin };
    }
}


interface InvalidVin {
    kind: "invalid vin";
    vin: string;
}

interface ValidVin {
    kind: "valid vin";
    vin: string;
}

export type Vin = ValidVin | InvalidVin;