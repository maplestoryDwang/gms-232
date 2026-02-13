CUTTER = 1096005

sm.setSpeakerID(CUTTER)
if sm.sendAskAccept("你来啦。在你去做事的时候，我已经把点火装置装到了大炮上。好了，事不宜迟！我们马上出发吧！"):
    sm.startQuest(parentID)
    sm.warp(912060200, 0)
else:
    sm.sendNext("You're not done here? What could you POSSIBLY want to do on a mostly-deserted island?")
    sm.dispose()