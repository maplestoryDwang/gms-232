# Just a Little Test 1 (62112)

zhenLong = 9310532
huangZhen = 9310536

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(zhenLong)
sm.sendNext("Oh, you're a wonderful human being for not giving me any trouble! At least, I hope you are...")
response = sm.sendAskYesNo(sm.join(["The test is simple. Just go to #p", repr(huangZhen), "#, the chef in Yu Garden, "
"and get some red bean porridge and garlic."]))
if response:
    sm.startQuest(parentID)
    
    sm.setParam(57)
    sm.sendNext("That's... the test? Isn't that a little too easy?")

    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(zhenLong)
    sm.sendNext("I know, it is. It IS too easy. I'm so sorry!")