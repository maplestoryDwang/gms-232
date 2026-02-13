# id 32120 ([Ellinel Fairy Academy] Dr. Betty's Measures), field 101072000
sm.setSpeakerID(1500001) # Headmistress Ivana
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(1500001) # Headmistress Ivana
sm.sendNext("你来啦。有收获吗？")
sm.setParam(2)
sm.sendSay("(给妖精们看巴缇博士的东西，并说明其功能。)")
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(1500002) # Faculty Head Kalayan
sm.sendSay("……那么，现在要让我们使用这不纯洁的人类的东西？不行！绝对不行！死也不行！")
sm.setInnerOverrideSpeakerTemplateID(1500009) # Rowen the Fairy
sm.sendSay("可现在别无他法，副校长先生。")
sm.setInnerOverrideSpeakerTemplateID(1500008) # Arwen the Fairy
sm.sendSay("罗雯的话没错。现在最首要的任务就是要找到那些孩子，不是吗？")
sm.setInnerOverrideSpeakerTemplateID(1500001) # Headmistress Ivana
sm.sendSay("我虽不赞同，但目前只有这个方法。")
sm.setInnerOverrideSpeakerTemplateID(1500002) # Faculty Head Kalayan
sm.sendSay("……呃……只好那样了，不过只此一回……不，不管怎么说……")
sm.setInnerOverrideSpeakerTemplateID(1500000) # Cootie the Really Small
sm.sendSay("我来启动试试。请大家暂时安静。")
sm.lockInGameUI(True, True)
sm.sendDelay(500)
sm.changeBGM("Bgm34.img/TheFairyForest", 0, 0)
sm.setParam(5)
sm.sendNext("好像捕捉到了森林里的各种声音……")
sm.sendSay("嘭……嘭……")
sm.sendDelay(2000)
sm.sendDelay(2000)
sm.sendNext("什么嘛，除了杂音什么也听不见。")
sm.sendDelay(2000)
sm.sendDelay(2000)
sm.setInnerOverrideSpeakerTemplateID(1500002) # Faculty Head Kalayan
sm.sendNext("呜呜……救命啊……呜呜。")
sm.setInnerOverrideSpeakerTemplateID(1500009) # Rowen the Fairy
sm.sendSay("是后院的方向。")
sm.sendDelay(3000)
sm.sendDelay(1000)
sm.setInnerOverrideSpeakerTemplateID(1500001) # Headmistress Ivana
sm.sendNext("等着我，孩子们！我副校长去救你们啦！")
sm.setInnerOverrideSpeakerTemplateID(1500000) # Cootie the Really Small
sm.sendSay("艾温，我们也一起去寻找孩子们吧！")
sm.setInnerOverrideSpeakerTemplateID(1500002) # Faculty Head Kalayan
sm.sendSay("各位，请等一下……！")
sm.setInnerOverrideSpeakerTemplateID(1500009) # Rowen the Fairy
sm.sendSay("吱吱吱…")
sm.setInnerOverrideSpeakerTemplateID(1500001) # Headmistress Ivana
sm.sendSay("嘘……安静。")
sm.changeBGM("Bgm34.img/TheFairyAcademy", 0, 0)
sm.lockInGameUI(False, True)
sm.completeQuestNoCheck(parentID)
