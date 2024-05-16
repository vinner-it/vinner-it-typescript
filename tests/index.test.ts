import { VinBuilder, Vin, InvalidVin, ValidVin } from '../src/VinBuilder';

describe('VinBuilder fastVin test', () => {
    test('fastVin with empty string should return invalidVin type', () => {
      const result = VinBuilder.fastVin('');
      expect(result).toBeInstanceOf(InvalidVin);
    });
});

describe('tests for valid vins', () => {
  test('this is a valid vin for Audi A6 Avant quattro', () => {
    const result = VinBuilder.fastVin('WAUZZZ4F4BN010985');
    expect(result).toBeInstanceOf(ValidVin);
  });
});