input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    if (input.temperature() < 10) {
        basic.showString("Couvrez-vous !")
    }
    if (input.temperature() >= 10 && input.temperature() <= 25) {
        basic.showString("Bonne journée !")
    }
    if (input.temperature() > 25) {
        basic.showString("Hydratez-vous !")
    }
})
