# Lira (2032003) | Zakum JQ
if sm.getFieldID() == 280020001:
    if sm.sendAskYesNo("You have reached the end of this jumpquest! I will send you back now"):
        if sm.hasQuest(9998):
            sm.setQRValue(9998, "zak", "1")
        else:
            sm.createQuestWithQRValue(9998, "zak=1")
    sm.warp(211042300, 2)



