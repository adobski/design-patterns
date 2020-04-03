import { expect } from 'chai';
import { StandardCar } from '../../src/decorator-pattern/StandardCar';
import { SportsCar } from '../../src/decorator-pattern/SportsCar';

describe('SportsCarTest', () => {
    it('should have a speed of 180', () =>{
        const car = new StandardCar();
        const sportsCar = new SportsCar(car);

        expect(sportsCar.topSpeed()).to.equal(180);
    });

    it('should have normal suspension', () => {
        const car = new StandardCar();
        const sportsCar = new SportsCar(car);

        expect(sportsCar.suspension()).to.equal('firm');
    });

    it('should have drum brakes', () => {
        const car = new StandardCar();
        const sportsCar = new SportsCar(car);

        expect(sportsCar.brakes()).to.equal('disc');
    });
});