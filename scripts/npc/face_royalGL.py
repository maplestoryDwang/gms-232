from net.swordie.ms.loaders import StringData

start = 0
end = 0
sel = sm.sendNext("Hello!\r\nI'm Nurse Pretty\r\nI do Unisex Faces!\r\n\r\n"
                  "#L0#Unisex Faces 1#l\r\n"
                  "#L1#Unisex Faces 2#l\r\n"
                  "#L2#Unisex Faces 3#l\r\n"
                  "#L3#Unisex Faces 4#l")
if sel == 0:
    start = 23000
    end = 24000
elif sel == 1:
    start = 26000
    end = 27000
elif sel == 2:
    start = 27000
    end = 28000
elif sel == 3:
    start = 28000
    end = 29000

if start > 0 and end > 0:
    al = chr.getAvatarData().getAvatarLook() if not chr.isZeroBeta() else chr.getAvatarData().getZeroAvatarLook()

    eyeColour = al.getFace() % 1000

    options = list(StringData.getFaces(start, end))

    temp = []
    for o in options:
        temp.append(o + eyeColour)
    options = temp

    answer = sm.sendAskAvatar("I can change your face to anything you'd like!", False, chr.isZeroBeta(), options)

    sm.changeCharacterLook(answer)
