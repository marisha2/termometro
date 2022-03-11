input.onButtonPressed(Button.A, function () {
    serial.writeNumber(input.temperature())
    serial.writeLine("celsius")
    basic.showNumber(input.temperature())
    basic.showString("celsius")
})
input.onButtonPressed(Button.AB, function () {
    if (input.temperature() > 25) {
        serial.writeLine("no cojer chaqueta")
        serial.writeLine("" + (input.temperature()))
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else if (input.temperature() < 25) {
        serial.writeLine("" + (input.temperature()))
        serial.writeLine("cojer chaqueta")
        basic.showIcon(IconNames.Umbrella)
    }
})
input.onButtonPressed(Button.B, function () {
    if (input.temperature() > 25) {
        serial.writeLine("" + (input.temperature()))
        basic.showIcon(IconNames.Happy)
    } else if (input.temperature() < 25) {
        serial.writeLine("" + (input.temperature()))
        basic.showIcon(IconNames.Sad)
    }
})
