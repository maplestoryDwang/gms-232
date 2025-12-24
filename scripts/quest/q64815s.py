# [NLC] Corruption of the Land
# 64815
# Corine (9201094)

corine = 9201094

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
sm.sendNext("I'm sorry; this must all seem rather confusing and arbitrary to you.")
sm.sendNext("I have a hypothesis, but there are a few things I still want to know. "
"To really be sure, I'd like to investigate the last altar.")
response = sm.sendAskYesNo("My friend, you're probably tired of beating up warriors, but...would you defeat 300 warriors? "
"I don't know why they're around these altars, but the place is swarming with them.")
if response:
    sm.startQuest(parentID)