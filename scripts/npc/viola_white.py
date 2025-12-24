# Flowers | Sleepywood  JQ
if sm.getFieldID() == 910530202:
    if sm.sendAskYesNo("You have reached the end of this jumpquest! I will send you back now"):
        if sm.hasQuest(9998):
            sm.setQRValue(9998, "sleepy", "1")
        else:
            sm.createQuestWithQRValue(9998, "sleepy=1")
    sm.warp(105000000)
