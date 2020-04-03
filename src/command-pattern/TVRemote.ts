import { ElectronicDevice } from "./ElectronicDevice";
import { Television } from "./receiver/Television";

export class TVRemote{

    static getDevice(): ElectronicDevice{
        return new Television();
    }
}