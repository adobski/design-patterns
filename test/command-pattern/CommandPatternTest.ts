import { expect } from 'chai';
import { ElectronicDevice } from '../../src/command-pattern/ElectronicDevice';
import { TVRemote } from '../../src/command-pattern/TVRemote';
import { TurnTVOff } from '../../src/command-pattern/commands/TurnTVOff';
import { DeviceButton } from '../../src/command-pattern/invoker/DeviceButton';
import { TurnTVOn } from '../../src/command-pattern/commands/TurnTVOn';

describe('CommandPatternTest', () => {
    it('should turn the TV on', () => {
        const electronicDevice = TVRemote.getDevice();

        const turnTVOn = new TurnTVOn(electronicDevice);

        const deviceButton = new DeviceButton(turnTVOn);

        expect(deviceButton.press()).to.equal('TV is on');
        
    });

    it('should turn the TV off', () => {
        const electronicDevice = TVRemote.getDevice();

        const turnTVOff = new TurnTVOff(electronicDevice);

        const deviceButton = new DeviceButton(turnTVOff);

        expect(deviceButton.press()).to.equal('TV is off');
    });
});