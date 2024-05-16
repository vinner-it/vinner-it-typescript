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

  test('this is a valid vin for 2009 Honda Odyssey', () => {
    const result = VinBuilder.fastVin('5FNRL38489B407103');
    expect(result).toBeInstanceOf(ValidVin);
  });

  test('this is a valid vin for 1992 Acura Legend', () => {
    const result = VinBuilder.fastVin('JH4KA8160NC005601');
    expect(result).toBeInstanceOf(ValidVin);
  });

  test('this is a valid vin for 1993 Acura Integra', () => {
    const result = VinBuilder.fastVin('JH4DB1650PS000680');
    expect(result).toBeInstanceOf(ValidVin);
  });
});