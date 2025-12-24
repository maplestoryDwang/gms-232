# [NLC] Unidentified Walking Object
# 64821
# Icebyrd Slimm (9201050)

icebyrd = 9201050

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(icebyrd)
sm.sendNext("You remember those seismic waves I mentioned last time we spoke, right?")
response = sm.sendAskYesNo("I'm sure Professor Foxwit is dying to hear what you uncovered. You ought to check in with him.")
if response:
    sm.startQuest(parentID)