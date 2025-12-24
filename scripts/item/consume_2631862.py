# Suspicious Fauxmiliar Coupon (2631862)

fauxmiliar = 2871251 if sm.getRandomIntBetween(0, 1) == 1 else 2871250
if not sm.canHold(fauxmiliar):
    sm.sendSayOkay("You require at least 1 empty 'use' inventory slot.")
    sm.dispose()
sm.consumeItem(2631862)
sm.giveItem(fauxmiliar)