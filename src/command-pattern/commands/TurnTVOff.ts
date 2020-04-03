import { Command } from "../Command";
import { ElectronicDevice } from "../ElectronicDevice";

export class TurnTVOff implements Command{
    private readonly electronicDevice: ElectronicDevice;

    constructor(electronicDevice: ElectronicDevice){
        this.electronicDevice = electronicDevice;
    }

    execute():string{
        return this.electronicDevice.off();
    }
}