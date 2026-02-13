MOONBEAM = 3002103

sm.setSpeakerID(2007)
if sm.sendAskYesNo("必须消灭掉所有怪物，继续向神殿深处前进。"):
    sm.createQuestWithQRValue(37999, "SKIP_38022")

if sm.getQRValue(37999) != "SKIP_38022":
    sm.lockInGameUI(True, False)
    sm.forcedInput(0)

    sm.removeEscapeButton()
    sm.setPlayerAsSpeaker()
    sm.sendNext("剩余怪物数量：")

    sm.setSpeakerID(MOONBEAM)
    sm.sendSay("没事吧？受伤了吗？")

    sm.setPlayerAsSpeaker()
    sm.sendSay("浑身都很疼！这里也疼，那里也疼。还有这里！")

    sm.setSpeakerID(MOONBEAM)
    sm.sendSay("不过好像一点伤痕也没有啊。")

sm.completeQuest(38020)
sm.completeQuest(parentID)
sm.giveExp(5000)

if sm.getQRValue(37999) != "SKIP_38022":
    sm.setPlayerAsSpeaker()
    sm.sendNext("本，本来内伤就要比外伤更疼！隐月，你这个傻瓜！我先走了！")

sm.lockInGameUI(False)
sm.warpInstanceOut(410000000, 2)
