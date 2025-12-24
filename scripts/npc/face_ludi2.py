al = chr.getAvatarData().getAvatarLook() if not chr.isZeroBeta() else chr.getAvatarData().getZeroAvatarLook()
face = al.getFace() - (al.getFace() % 1000 - al.getFace() % 100)  # Default Black Lenses
options = [0, 100, 200, 300, 400, 500, 600, 700, 800]
options = list(map(lambda x: x + face, options))
answer = sm.sendAskAvatar(
    "With our specialized machine, you can see the results of your potential treatment in advance. "
    "What kind of lens would you like to wear? Please choose the style of your liking.",
    False, chr.isZeroBeta(), options)
sm.changeCharacterLook(answer)
