radio.onReceivedString(function (receivedString) {
    if (receivedString == "STOP") {
        Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Down)
        basic.showString(receivedString)
        Kitronik_ACCESSbit.buzzerControl(Kitronik_ACCESSbit.BuzzerLength.Long, 4)
    }
    if (receivedString == "GO") {
        Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Up)
    }
})
radio.setGroup(0)
