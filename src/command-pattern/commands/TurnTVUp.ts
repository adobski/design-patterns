
import { Command } from "../Command";
import { ElectronicDevice } from "../ElectronicDevice";

export class TurnTVUp implements Command{
    private readonly electronicDevice: ElectronicDevice;

    constructor(electronicDevice: ElectronicDevice){
        this.electronicDevice = electronicDevice;
    }

    execute():string{
        return this.electronicDevice.volumeUp();
    }
}