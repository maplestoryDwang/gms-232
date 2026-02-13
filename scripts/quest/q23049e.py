# 23049 - BaM 4th job advancement

sm.setSpeakerID(2159110)
if chr.getJob() == 3211 and chr.getLevel() >= 100:
    sm.setJob(3212)
    sm.addSP(5)
    sm.completeQuest(23049)
    sm.chat("You... have outclassed me.")
    sm.warp(310000000)
else:
    sm.sendSayOkay("你成功地破坏掉了黑色之翼的新武器！哈哈……真不敢相信！连我都没有做到的事情，你竟然做到了！你真是个了不起的家伙！有你这样的反抗者，我为你感到自豪！")