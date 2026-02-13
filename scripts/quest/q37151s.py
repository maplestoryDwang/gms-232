# id 37151 ([Elodin] Anne's Plea for Help), field 101082000
sm.setSpeakerID(1012110) # Anne
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(1012110) # Anne
sm.sendNext("#fs10#喂……喂……")
sm.setParam(2)
sm.sendSay("嗯？好像有人在叫我……")
sm.setParam(4)
sm.sendSay("嗯……能听到我的声音吗……")
sm.sendSay("我是在魔法密林进行研究的巴缇博士的女儿桉。")
sm.sendSay("我有件事想请你帮忙…你能答应我吗？")
res = sm.sendAskYesNo("那么…请过来找我……拜托了……\r\n#r（接受时，移动到魔法密林的桉的前面。）")
sm.startQuest(parentID)
sm.setParam(5)
sm.sendNext("我在魔法密林等你。")
sm.warp(101000000)
