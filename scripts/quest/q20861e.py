# The Path of a Dawn Warrior - Completion

sm.setSpeakerID(1101003) # Mihile
if sm.canHold(1402001):
    sm.jobAdvance(1100) # Dawn Warrior 1st Job
    sm.addSP(5)
    sm.setSTR(4)
    sm.setINT(4)
    sm.setDEX(4)
    sm.setLUK(4)
    sm.setAP(4 + chr.getLevel() * 5)
    sm.completeQuest(parentID)
    sm.giveItem(1402001) # Wooden Sword (2H)
    sm.sendSayOkay("你已经做好选择了吗？选择之后是不能反悔的，所以务必慎重。你真的要选择魂骑士之路吗？")
else:
    sm.sendSayOkay("我会将你的身体改造成适合魂骑士的身体。之后如果你想变得更强，可以在属性窗(S键)中提升相应的属性。如果觉得太难，可以使用#b自动分配#k。")