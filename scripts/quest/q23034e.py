# 23034 - Wild Hunter 3rd job advancement

sm.setSpeakerID(2151002) # Belle
if chr.getJob() == 3310 and chr.getLevel() >= 60:
    sm.setJob(3311)
    sm.addSP(5)
    sm.completeQuest(23034)
    sm.sendSayOkay("你把#o9001032#破坏掉啦！呵呵，果然不出我所料！我的眼光从来都没有错。我知道你一定可以做到。这样一来，我们村的能量不足现象暂时就可以缓解了。你真的为我们村立下了大功！")
else:
    sm.sendSayOkay("你的能力达到了这个程度，我就可以放心地让你进入下一阶段的课程了。虽然其他人劝我，说还很危险……但是我想你一定不会被技能难倒，一定可以成为更强的豹弩游侠！")