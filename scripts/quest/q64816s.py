# [NLC] A Historian's Studies
# 64816
# Corine (9201094)

corine = 9201094

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
sm.sendNext("Elpam came by with some news.")
response = sm.sendAskYesNo("He said he'd finished researching the flora you'd collected for him before. "
"Could you stop by and see if he needs help with anything else?")
if response:
    sm.startQuest(parentID)

    sm.sendNext("O'hana taru'teha. May the Spirits of the Jungle guide your path.")