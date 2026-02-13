# Just a Little Test 1 (62112)

zhenLong = 9310532
huangZhen = 9310536

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(zhenLong)
sm.sendNext("你想进行测试？嗯 ，好吧！不过，如果你不是人类，而是僵尸或者鬼怪的话，我劝你还是放弃吧。")
response = sm.sendAskYesNo(sm.join(["The test is simple. Just go to #p", repr(huangZhen), "#, the chef in Yu Garden, "
"and get some red bean porridge and garlic."]))
if response:
    sm.startQuest(parentID)
    
    sm.setParam(57)
    sm.sendNext("测试很简单。去找豫园的厨师#p9310536#大叔，带来红豆粥和蒜就可以了。很简单吧？")

    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(zhenLong)
    sm.sendNext("那也算测试？是不是太简单了啊？")