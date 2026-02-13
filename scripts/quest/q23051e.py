# 23051 - Mechanic 4th job advancement

sm.setSpeakerID(2159112) # Injured Checky
if chr.getJob() == 3511 and chr.getLevel() >= 100:
    sm.setJob(3512)
    sm.addSP(5)
    sm.completeQuest(23051)
    sm.chat("You... have outclassed me.")
    sm.warp(310000000)
else:
    sm.sendSayOkay("黑色之翼的新武器……成功地破坏掉了吗？我真不敢相信自己的眼睛。你改变了未来！真的，真的很了不起！你能加入反抗者，真是太好了！真的！真的……太好了！")