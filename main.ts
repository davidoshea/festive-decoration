input.onButtonPressed(Button.A, function () {
    led.stopAnimation()
    basic.clearScreen()
    basic.showString("temp")
    basic.showNumber(input.temperature())
    basic.pause(500)
})
input.onButtonPressed(Button.AB, function () {
    led.stopAnimation()
    basic.clearScreen()
    for (let index = 0; index <= 10; index++) {
        n3 = n2
        n3 += n1
        n1 = n2
        n2 = n3
        basic.showNumber(n3)
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    while (false) {
        led.stopAnimation()
        basic.clearScreen()
        basic.showString("light")
        basic.showNumber(input.lightLevel())
        basic.pause(500)
    }
})
input.onGesture(Gesture.ThreeG, function () {
    basic.pause(slowness2)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(slowness2)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.pause(slowness2)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.pause(slowness2)
    basic.showLeds(`
        # . . . #
        . # # # .
        . # . # .
        . # # # .
        # . . . #
        `)
    basic.pause(slowness2)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . . . #
        . # . # .
        # . # . #
        `)
    basic.pause(slowness2)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(slowness2)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . . . #
        . # . # .
        # . # . #
        `)
    basic.pause(slowness2)
    basic.showLeds(`
        # . . . #
        . # # # .
        . # . # .
        . # # # .
        # . . . #
        `)
    basic.pause(slowness2)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.pause(slowness2)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.pause(slowness2)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(slowness2)
    basic.clearScreen()
    basic.pause(slowness2)
})
let n3 = 0
let n2 = 0
let n1 = 0
let slowness: number
slowness = 1
let slowness2: number
slowness2 = 1
n1 = 0
n2 = 1
