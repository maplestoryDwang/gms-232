# 23035 - Mechanic 3rd job advancement

sm.setSpeakerID(2151004) # Checky
if chr.getJob() == 3510 and chr.getLevel() >= 60:
    sm.setJob(3511)
    sm.addSP(5)
    sm.completeQuest(23035)
    sm.sendSayOkay("你成功地破坏了#o9001032#！你没有辜负我对你的期待……真的非常感谢。这样的话，我们村的能量不足现象就会有一定程度的缓解。你这次真的为我们村立了大功。")
else:
    sm.sendSayOkay("我亲眼确认了你的能力，现在轮到我向你展现我的能力了。我会将新的技能传授给你。技能的熟练度不高的话，将会无法使用。我本来想过一段时间再告诉你……不过现在的你已经拥有了充分的能力。")