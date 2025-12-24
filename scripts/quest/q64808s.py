# [NLC] Otherworldly Assistance
# 64808
# Corine (9201094)

corine = 9201094

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
response = sm.sendAskYesNo("Elpam, my traveling companion, has something to ask of you too. "
"Could you meet with him and hear him out?")
if response:
    sm.startQuest(parentID)

    sm.sendNext("You're very kind. You can find Elpam over there, to the left.")