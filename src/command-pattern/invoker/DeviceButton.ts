import { Command } from "../Command";

export class DeviceButton{
    private readonly command: Command;

    constructor(command: Command){
        this.command = command;
    }

    press(): string{
        return this.command.execute();
    }
}