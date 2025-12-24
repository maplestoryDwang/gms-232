# [Jett] The Crashed Alien
# 66101
# Black Bark (9270088)

crashedAlien = 1142809

if sm.canHold(crashedAlien):
    sm.startQuest(parentID)
    sm.completeQuest(parentID)
    sm.giveItem(crashedAlien)
else:
    sm.setSpeakerID(9270088)
    sm.sendSayOkay("Please make room in your Equip inventory.")