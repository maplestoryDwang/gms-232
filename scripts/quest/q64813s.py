# [NLC] The Altar of the Krakians
# 64813
# Corine (9201094)

corine = 9201094

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
sm.sendNext("Though I wasn't able to find any good entryways into the city, I did confirm the presence of a Krakian altar.")
sm.sendNext("The Krakians built altars and worshiped nature through rituals. "
"If we go there, we should be able to gather more information!")
sm.sendNext("The problem is, there were too many Mutated Krakians for me to go in and investigate myself.")

sm.setParam(57)
sm.sendNext("I think I know what you're getting at. Don't worry, I'll take care of it.")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
response = sm.sendAskYesNo("Thank you! If you were to fell about 300 Mutated Krakian Warriors, "
"that should make it safe enough to enter.")
if response:
    sm.startQuest(parentID)