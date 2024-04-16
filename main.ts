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
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 40)
    } else if (cmd == 23) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 40)
    } else if (cmd == 6) {
        basic.showArrow(ArrowNames.West)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 20)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
    } else if (cmd == 7) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 20)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
        basic.showArrow(ArrowNames.East)
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
radio.setGroup(42)
maqueen.motorStop(maqueen.Motors.All)
cmd = 999
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
	
})
