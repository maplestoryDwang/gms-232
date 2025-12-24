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
sm.sendNext("I'm so sorry to bother you, but could you tell me why you're here?")

sm.setParam(57)
sm.sendNext(sm.join(["Sure. #p", repr(chiefTatamo), "# of Leafre sent me to search for a Halflinger called #p", repr(tomo), "#."]))

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(zhenLong)
sm.sendNext("I'm so sorry to ask, but do you usually do favors for people in dangerous places just because they asked you to?")

sm.setParam(57)
sm.sendNext("Between you and me, I think that's the only reason people talk to me anymore.")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(zhenLong)
sm.sendNext(sm.join(["I'm so, so sorry, but that's just not convincing. "
"If you want to visit #m", repr(yuGarden), "#, you have to pass a test. I mean, if you don't mind..."]))
response = sm.sendAskYesNo("Will you... maybe... could I trouble you to take the test?")
if response:
    sm.completeQuest(parentID)
    sm.giveExp(170598)
    sm.sendNext("Thank you for being so wonderfully cooperative! Talk to me again to take the test!")
else:
    sm.sendNext("I can't just let you wander around here as you please if you don't take the test...")