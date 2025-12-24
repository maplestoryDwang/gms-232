# Treasure Chest | Subway 1  JQ
if sm.getFieldID() == 910360203:
    if sm.sendAskYesNo("You have reached the end of this jumpquest! I will send you back now"):
        if sm.hasQuest(9998):
            sm.setQRValue(9998, "sub3", "1")
        else:
            sm.createQuestWithQRValue(9998, "sub3=1")
    sm.warp(103020000)