radio.onReceivedNumber(function (receivedNumber) {
    cmd = receivedNumber
    if (cmd == 62) {
        basic.showIcon(IconNames.Happy)
    } else if (cmd == 65) {
        basic.clearScreen()
    } else if (cmd == 103) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    } else if (cmd == 104) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    } else if (cmd == 5) {
        maqueen.motorStop(maqueen.Motors.All)
    } else if (cmd == 22) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
    } else if (cmd == 23) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 30)
    }
})
input.onButtonPressed(Button.A, function () {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
})
input.onButtonPressed(Button.B, function () {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
})
let cmd = 0
radio.setGroup(1)
maqueen.motorStop(maqueen.Motors.All)
cmd = 999
basic.showIcon(IconNames.Duck)
basic.forever(function () {
	
})
