import { expect } from 'chai';
import { StandardCar } from '../../src/decorator-pattern/StandardCar';

describe('StandardCarTest', () => {
    it('should have a speed of 5', () =>{
        const car = new StandardCar();

        expect(car.topSpeed()).to.equal(100);
    });

    it('should have normal suspension', () => {
        const car = new StandardCar();

        expect(car.suspension()).to.equal('normal');
    });

    it('should have drum brakes', () => {
        const car = new StandardCar();

        expect(car.brakes()).to.equal('drum');
    });
});