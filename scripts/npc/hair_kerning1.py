# Kerning VIP Hair

from net.swordie.ms.loaders import StringData

male_start = 33000
male_end = 34000
female_start = 34000
female_end = 35000


al = chr.getAvatarData().getAvatarLook() if not chr.isZeroBeta() else chr.getAvatarData().getZeroAvatarLook()
hairColour = al.getHair() % 10

start = female_start if al.getGender() else male_start
end = female_end if al.getGender() else male_end

options = StringData.getHairs(start, end)

temp = []
for o in options:
    temp.append(o + hairColour)
options = temp

answer = sm.sendAskAvatar("I can change your hair to anything you'd like!", False, chr.isZeroBeta(), options)

sm.changeCharacterLook(answer)
