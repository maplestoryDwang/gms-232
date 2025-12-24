# 103020000
sm.setSpeakerID(1052007)
if sm.hasQuest(1600):
    selection = sm.sendNext("Pick your destionation. \r\n\r\n #b#L0#Subway Construction Site#l#k \r\n #L1#Kerning City Subway (Beware of Stirges and Wraiths)#l")
    if selection == 0:
        sm.warpInstanceIn(931050400)
    elif selection == 1:
        sm.warp(103020100, 2)
else:
    sm.warp(103020100, 2)
    sm.dispose()
