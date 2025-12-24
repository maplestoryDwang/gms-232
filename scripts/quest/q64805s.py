# [NLC] Explosives Strictly Prohibited
# 64805
# Lita Lawless (9201054)

lita = 9201054

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(lita)
sm.sendNext("We've been getting reports of a lot of Boomers gathering on the outskirts of the city.")
sm.sendNext("As you probably know, Boomers are a danger to everyone. "
"I need you to clear them out, quickly and quietly, before they explode and make a huge mess everywhere.")
response = sm.sendAskYesNo("I think taking out somewhere around 100 Boomers out to make things better around here. "
"Are you ready?")
if response:
    sm.startQuest(parentID)

    sm.sendNext("Looking forward seeing what you've got!")