# 23050 - WH 4th job advancement

sm.setSpeakerID(2159110)
if chr.getJob() == 3311 and chr.getLevel() >= 100:
    sm.setJob(3312)
    sm.addSP(5)
    sm.completeQuest(23050)
    sm.chat("You... have outclassed me.")
    sm.warp(310000000)
else:
    sm.sendSayOkay("你成功地破坏掉了黑色之翼的新武器！哈哈哈哈！你果然是个了不起的家伙！我说过我的眼睛绝不会错！没有什么比弓箭手的眼睛更亮的了！我就知道你一定可以做到！反抗者中有你这样的人，我感到很自豪！")