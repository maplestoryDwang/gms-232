# [NLC] The Scorched Altar
# 64814
# Corine (9201094)

corine = 9201094

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
sm.sendNext("Let's investigate the next altar, #h #.")
sm.sendNext("From what I saw as I scouted, it looked like that altar might have seen use in rituals!")
response = sm.sendAskYesNo("Can you defeat 300 warriors for me again? "
"I know it might seem like a lot, but this place is really crawling with them.")
if response:
    sm.startQuest(parentID)