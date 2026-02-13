# 34657 (Second Fighting Tactic, Cadena 2nd job adv)
sm.setSpeakerID(3001200) # Gen
if chr.getJob() == 6400:
    sm.sendNext("看来你在用我传授的技术出色地执行任务啊。很好，你在实践方面的表现也非常优秀。")
    sm.sendSay("虽然你的性格太过自由散漫，有时会让我有些担心。不过……我必须承认，你的天赋确实出众。")
    sm.sendSay("你已经掌握了我传授的技术，我们进入下一阶段吧。接下来，我来教你第二项战斗技术。")
    # add stats
    sm.setJob(6410)
    sm.addAP(5)
    sm.addSP(7)
    sm.addMaxHP(350)
    sm.addMaxMP(200)
    sm.sendNext("这一技术比你之前学习过的都要难，不过我相信你一定可以完美掌握它的。")
    sm.sendSay("过不了多久，你就会接到越来越危险的任务了。我已经把足以应付任务的技术都教给你了。打开技能栏(K)看看吧。")
    sm.sendSayOkay("希望你以后也能够继续脚踏实地，取得更大的进步。只要你不断磨练自己，终有一天所谓强大的技术都会变成无用之物的。")
    sm.completeQuestNoCheck(parentID)