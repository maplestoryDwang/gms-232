# [Jett] Awakened Jett
# 66104
# Black Bark (9270088)

awakenedJett = 1142812

if sm.canHold(awakenedJett):
    sm.startQuest(parentID)
    sm.completeQuest(parentID)
    sm.giveItem(awakenedJett)
else:
    sm.setSpeakerID(9270088)
    sm.sendSayOkay("Please make room in your Equip inventory.")