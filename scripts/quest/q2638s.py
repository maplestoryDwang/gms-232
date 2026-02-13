#   [Job Adv] (Lv.30)   Becoming a Blade Acolyte
sm.setSpeakerID(1056000)
sm.sendNext("要转职为双刀客，需要有一个证明。你要通过考试来证明自己有足够的实力。不用担心，你肯定没问题的。")
if sm.sendAskYesNo("你到我创造出来的空间去和影子双刀战斗，从他们身上获得黑珠吧。这就是为了唤醒你的慧眼而做的考试，接受我就直接送你过去。"):
    sm.warp(910350300, 0, True)
    sm.startQuestNoCheck(parentID)
else:
    sm.sendSayOkay("You cannot stay a mere Blade Recruit. You #bwill#k have to face up to the test.\r\n"
                   "Talk to me when you are ready.")
sm.dispose()
