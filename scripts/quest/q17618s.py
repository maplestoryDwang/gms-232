# id 17618 ([Commerci Republic] The Lady in Robes), field 865000001
sm.setSpeakerType(3)
sm.setParam(16)
res = sm.sendAskYesNo("#b(Okay, so there were a lot of goods that were stolen, and the thief was working alone... Chances are, he couldn't have gotten far. I can catch him!)#k")
sm.setParam(17)
sm.sendNext("Okay, the opposite direction of Berry... To the east I go!")
sm.startQuest(parentID)
sm.warp(865020001)
