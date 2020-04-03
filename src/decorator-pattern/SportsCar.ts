import { Car } from './Car';

export class SportsCar implements Car{

    private readonly decoratedCar: Car;

    constructor(decoratedCar: Car){
        this.decoratedCar = decoratedCar;
    }

    topSpeed(): number{
        return this.decoratedCar.topSpeed() + 80;
    };

    suspension(): string{
        return 'firm';
    }

    brakes(): string{
        return 'disc';
    }
}