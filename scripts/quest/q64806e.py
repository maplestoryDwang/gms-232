# [NLC] Traveling Checkpoint
# 64806
# Corine (9201094)

corine = 9201094

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
sm.sendNext("Salu o'kahari, my friend!")

sm.setParam(57)
sm.sendNext("Huh...?")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
sm.sendNext("Oh, sorry. It means #bhello#k in the Taru language.")

sm.setParam(57)
sm.sendNext("Oh, gotcha! Hmm...'saloo oh-ka'.. Er... "
"Anyway, I'm #h #! Nice to meet you.")
sm.sendNext("More importantly, what is a Taru?")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
sm.sendNext("Haha! You're funny! The Taru were one of the Krakian tribes that lived in ancient Masteria.")

sm.setParam(57)
sm.sendNext("So then, would that make you a Krakian?")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
sm.sendNext("Yes indeedy. I may also be the last remaining pure-blooded Krakian, "
"as much as I'd like to be mistaken about that.")

sm.completeQuest(parentID)