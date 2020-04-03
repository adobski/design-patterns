import { Car } from './Car';

export class StandardCar implements Car{
    topSpeed(): number{
        return 100;
    };

    suspension(): string{
        return 'normal';
    }

    brakes(): string{
        return 'drum';
    }
}