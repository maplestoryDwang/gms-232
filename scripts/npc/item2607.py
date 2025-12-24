pos = chr.getPosition()
if sm.hasQuest(2607):
    if not sm.hasItem(4033178) and pos.getX() <= -1073 and pos.getY() <= -222:
        sm.giveItem(4033178)
        sm.sendNext("(The Owl passes you a seal, a look of utmost indifference on his face. Then it flaps its wings and shoos you away.)")
    else:
        sm.sendNext("(The Owl stares at you from a distance.)")

elif pos.getX() <= -1073 and pos.getY() <= -222:
    sm.chat("(The Owl flaps its wings and shoos you away.)")
else:
    sm.chat("(The Owl stares at you from a distance.)")