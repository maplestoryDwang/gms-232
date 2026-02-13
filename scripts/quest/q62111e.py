# Stop! Inspection! (62111)

zhenLong = 9310532
chiefTatamo = 2081000
tomo = 9310538

yuGarden = 701100000

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(zhenLong)
sm.sendNext("我从没见过你啊！你从哪里来的？来上海做什么？")

sm.setParam(57)
sm.sendNext(sm.join(["Sure. #p", repr(chiefTatamo), "# of Leafre sent me to search for a Halflinger called #p", repr(tomo), "#."]))

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(zhenLong)
sm.sendNext("啊，我受神木村#p2081000#的委托，来寻找一个叫#p9310538#的哈夫林……")

sm.setParam(57)
sm.sendNext("嗯，这个理由太牵强了吧！你的意思是说，你是受人之托才到上海这座危险的城市来吗？")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(zhenLong)
sm.sendNext(sm.join(["I'm so, so sorry, but that's just not convincing. "
"If you want to visit #m", repr(yuGarden), "#, you have to pass a test. I mean, if you don't mind..."]))
response = sm.sendAskYesNo("帮助陷入危机的人，是我义不容辞的责任……")
if response:
    sm.completeQuest(parentID)
    sm.giveExp(170598)
    sm.sendNext("虽然你看上去很可疑，但我还是暂且相信你吧。不过，要是你想留在#m701100000#的话，就必须先经受一项测试。如果无法通过测试，别说待在#m701100000#了，就连一秒钟都别想逗留！")
else:
    sm.sendNext("很好，等你准备好接受测试后，再来和我说话吧。")