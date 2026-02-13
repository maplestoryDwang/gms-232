# 34658 (Third Fighting Tactic, Cadena 3rd job adv)
sm.setSpeakerID(3001200) # Gen
if chr.getJob() == 6410:
    sm.sendNext("看来你在用我传授的技术出色地执行任务呢？很好，你在实践方面也表现出了卓越的水平。")
    sm.sendSay("……虽然你从不在意别人的评价……但就当我这句话是在夸你进步了吧。")
    # add stats
    sm.setJob(6411)
    sm.addAP(5)
    sm.addSP(7)
    sm.addMaxHP(350)
    sm.addMaxMP(200)
    sm.sendNext("你已经掌握了我传授的技术，我们进入下一阶段吧。接下来，我来教你第三项战斗技术。")
    sm.sendSayOkay("这一技术比你之前学习过的都要难，不过我相信你一定可以完美掌握它的。")
    sm.completeQuestNoCheck(parentID)