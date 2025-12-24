# [NLC] Suspicious Surroundings
# 64820
# Corine (9201094)

corine = 9201094

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
sm.sendNext("Salu o'kahari, my friend!")

sm.setParam(57)
sm.sendNext("Salu o'kahari! Corine! Are you feeling better now?")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
sm.sendNext("I am, thanks in no small part to you.")
sm.sendNext("By the way, I thought of something I'd like your help with, if you're willing.")
sm.sendNext("You may have already seen them, but there seems to be strangers in the west of the jungle.")
sm.sendNext("I don't know who they are, but they seemed dangerous. "
"They were roaming around the jungle threatening the animals.")
response = sm.sendAskYesNo("Can you tell the mayor of NLC about this?")
if response:
    sm.startQuest(parentID)

    sm.sendNext("Thank you, my friend. \r\n"
    "O'hana taru'teha. May the Spirits of the Jungle guide your path, as always!")