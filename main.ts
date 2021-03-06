basic.showIcon(IconNames.Yes)
let strip = neopixel.create(DigitalPin.P12, 5, NeoPixelMode.RGB)
strip.setBrightness(50)
basic.forever(function () {
    if (gatorMicrophone.getSoundIntensity() > 2000) {
        basic.clearScreen()
        strip.showBarGraph(gatorMicrophone.getSoundIntensity(), 2000)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
