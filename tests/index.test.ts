import { VinBuilder, InvalidVin, ValidVin } from '../src/VinBuilder';

describe('VinBuilder fastVin Invalid vins test', () => {
    test('fastVin with empty string should return invalidVin type', () => {
      const result = VinBuilder.fastVin('');
      expect(result).toBeInstanceOf(InvalidVin);
    });

    test('fastVin with less than 17 characters should return InvalidVin type', () => {
        const result = VinBuilder.fastVin('123456789012345');
        expect(result).toBeInstanceOf(InvalidVin);
    });

    test('fastVin with more than 17 characters should return InvalidVin type', () => {
        const result = VinBuilder.fastVin('123456789012345678');
        expect(result).toBeInstanceOf(InvalidVin);
    });

    test('fastVin with invalid character "I" should return InvalidVin type', () => {
        const result = VinBuilder.fastVin('1HGCM82633A12345I');
        expect(result).toBeInstanceOf(InvalidVin);
    });

    test('fastVin with invalid character "O" should return InvalidVin type', () => {
        const result = VinBuilder.fastVin('1HGCM82633A12345O');
        expect(result).toBeInstanceOf(InvalidVin);
    });
    
      test('fastVin with invalid character "Q" should return InvalidVin type', () => {
        const result = VinBuilder.fastVin('1HGCM82633A12345Q');
        expect(result).toBeInstanceOf(InvalidVin);
    });
 
}); 


describe('tests for valid vins', () => {
  test('this is a valid vin for Audi A6 Avant quattro', () => {
    const result = VinBuilder.fastVin('WAUZZZ4F4BN010985');
    expect(result).toBeInstanceOf(ValidVin);
  });
});