input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    oDictionary.add("anq", 1)
    oDictionary.add("b", 2)
    oDictionary.add("cdf", 3)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    s = oDictionary.findString(1)
    if (dictionary.isundefined(s)) {
        basic.clearScreen()
        basic.setLedColor(0xff0000)
    } else {
        basic.showString(s)
        basic.setLedColor(0x00ff00)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    n = oDictionary.findNumber("b")
    if (dictionary.isundefined(n)) {
        basic.clearScreen()
        basic.setLedColor(0xff0000)
    } else {
        basic.showNumber(n)
        basic.setLedColor(0x00ff00)
    }
})
let n = 0
let s = ""
let oDictionary: dictionary.dictionary = null
oDictionary = dictionary.create()
