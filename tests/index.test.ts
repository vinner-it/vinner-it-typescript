import { VinBuilder, Vin } from '../src/VinBuilder';

describe('VinBuilder fastVin test', () => {
    test('fastVin with empty string should return invalidVin type', () => {
      const result = VinBuilder.fastVin('');
      console.log(result);
      expect(result).toEqual({ kind: "invalid vin", vin: '' });
    });
});