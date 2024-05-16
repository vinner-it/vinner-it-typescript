import { VinBuilder, Vin, InvalidVin, ValidVin } from '../src/VinBuilder';

describe('VinBuilder fastVin test', () => {
    test('fastVin with empty string should return invalidVin type', () => {
      const result = VinBuilder.fastVin('');
      expect(result).toBeInstanceOf(InvalidVin);
    });
});