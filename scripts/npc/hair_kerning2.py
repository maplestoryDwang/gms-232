option = list(range(8))
al = chr.getAvatarData().getAvatarLook() if not chr.isZeroBeta() else chr.getAvatarData().getZeroAvatarLook()
hairNoColour = (al.getHair() / 10) * 10

option = list(map(lambda x: (x + hairNoColour), option))
answer = sm.sendAskAvatar("I can change your hair colour to anything you'd like!", False, chr.isZeroBeta(), option)

sm.changeCharacterLook(answer)
