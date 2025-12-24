# Treasure Chest | Subway 1  JQ
if sm.getFieldID() == 800040211:
    if sm.sendAskYesNo("You have reached the end of this jumpquest! I will send you back now"):
        if sm.hasQuest(9998):
            sm.setQRValue(9998, "ninja", "1")
        else:
            sm.createQuestWithQRValue(9998, "ninja=1")
    sm.warp(800040000)