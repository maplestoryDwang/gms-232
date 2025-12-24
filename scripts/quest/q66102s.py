# [Jett] With Strength Renewed
# 66102
# Black Bark (9270088)

strengthRenewed = 1142810

if sm.canHold(strengthRenewed):
    sm.startQuest(parentID)
    sm.completeQuest(parentID)
    sm.giveItem(strengthRenewed)
else:
    sm.setSpeakerID(9270088)
    sm.sendSayOkay("Please make room in your Equip inventory.")