from net.swordie.ms.loaders import StringData

male_start = 46000
male_end = 47000
female_start = 48000
female_end = 49000

al = chr.getAvatarData().getAvatarLook() if not chr.isZeroBeta() else chr.getAvatarData().getZeroAvatarLook()

eyeColour = al.getFace() % 1000

start = female_start if al.getGender() else male_start
end = female_end if al.getGender() else male_end

options = list(StringData.getFaces(start, end))

temp = []
for o in options:
    temp.append(o + eyeColour)
options = temp

answer = sm.sendAskAvatar("I can change your face to anything you'd like!", False, chr.isZeroBeta(), options)

sm.changeCharacterLook(answer)
