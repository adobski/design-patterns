import { ElectronicDevice } from "../ElectronicDevice";

export class Television implements ElectronicDevice{
    
    private volume: number = 0;

    on(): string {
        return 'TV is on';
    }
    off(): string {
        return 'TV is off';
    }
    volumeUp(): string {
        this.volume++;
        return 'TV volume is at: ' + this.volume;
    }
    volumeDown(): string {
        this.volume--;
        return 'TV volume is at: ' + this.volume;
    }
    

}