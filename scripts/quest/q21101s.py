# 140000000
LILIN = 1201000

sm.setSpeakerID(LILIN)
if sm.sendAskYesNo("#b(你仔细思考了一番...)#k"):
    sm.giveItem(1142129)
    sm.startQuest(parentID)
    sm.completeQuest(parentID)
    sm.removeSkill(20000297)
    sm.setJob(2100)
    sm.addSP(5, True)
    sm.setSTR(4)
    sm.setINT(4)
    sm.setDEX(4)
    sm.setLUK(4)
    sm.setAP(4 + chr.getLevel() * 5)
    # 444
    sm.removeSkill(20001296)
    sm.giveSkill(20001296)
    sm.chatScript("#b(让我确认自己是不是使用#p1201001#的英雄？使劲抓住#p1201001#试试，肯定会有什么反映的。)#k")

    sm.removeEscapeButton()
    sm.setPlayerAsSpeaker()
    sm.sendNext("学会了返回里恩技能。")

    sm.lockInGameUI(True, False)
    sm.warp(914090100, 0)
else:
    sm.sendNext("#b（似乎想起来了什么……）#k")