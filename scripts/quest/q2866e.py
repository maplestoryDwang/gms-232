# JM's Next Request
# 2866
# Someone's Hat (1052128)

jake = 1052006

if sm.hasMobsInField():
    sm.setSpeakerID(1052128)
    sm.sendSayOkay("(Eliminate all of the Shades before investigating the hat.)")
else:
    sm.setPlayerAsSpeaker()
    sm.sendNext("Whose hat is this? Maybe it belongs to #p" + repr(jake) + "#? \r\n"
    "(You pick up the hat.)")
    sm.completeQuest(parentID)