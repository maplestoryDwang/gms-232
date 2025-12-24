# [Jett] A Ready Hunter
# 66103
# Black Bark (9270088)

readyHunter = 1142811

if sm.canHold(readyHunter):
    sm.startQuest(parentID)
    sm.completeQuest(parentID)
    sm.giveItem(readyHunter)
else:
    sm.setSpeakerID(9270088)
    sm.sendSayOkay("Please make room in your Equip inventory.")