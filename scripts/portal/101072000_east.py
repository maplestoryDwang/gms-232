# id 1 (pt_east), field 101072000
sm.setSpeakerType(8)
sm.setParam(16)
if sm.hasQuestCompleted(32120):
    sm.warp(101073000)
else:
    sm.sendSayOkay("The door is locked.")

