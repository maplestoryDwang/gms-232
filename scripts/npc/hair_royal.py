# Big Headward | Henesys Hair Salon
from net.swordie.ms.loaders import StringData

start = 0
end = 0
sel = sm.sendNext("Hello!\r\nI'm Big Headward\r\nI do Unisex Hairs!\r\n\r\n"
                  "#L0#Unisex Hairs 1#l\r\n"
                  "#L1#Unisex Hairs 2#l\r\n"
                  "#L2#Unisex Hairs 3#l")
if sel == 0:
    start = 32000
    end = 32999
elif sel == 1:
    start = 39000
    end = 39999
elif sel == 2:
    start = 42000
    end = 42999

if start > 0 and end > 0:
    al = chr.getAvatarData().getAvatarLook() if not chr.isZeroBeta() else chr.getAvatarData().getZeroAvatarLook()
    hairColour = al.getHair() % 10

    options = StringData.getHairs(start, end)

    temp = []
    for o in options:
        temp.append(o + hairColour)
    options = temp

    answer = sm.sendAskAvatar("I can change your hair to anything you'd like!", False, chr.isZeroBeta(), options)

    sm.changeCharacterLook(answer)
