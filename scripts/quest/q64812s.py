# [NLC] In the Footsteps of the Krakians
# 64812
# Corine (9201094)

corine = 9201094

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
sm.sendNext("It's said that the Krakians faced the Gryphons, one of the jungle's great predators, to prove their valor.")
sm.sendNext("We also know from the old traditions that they decorated themselves with Gryphon feathers "
"as a show of their superiority and prowess.")
sm.sendNext("It's a ridiculous story, and a rather barbaric tradition, but it offers a great opportunity for study. "
"You may be able to find traces of the Krakians if you go to where the Gryphons are!")
response = sm.sendAskYesNo("Can you investigate the ancient Krakians' traces through the falls ahead? "
"Fighting off about 300 Gryphons should be enough.")
if response:
    sm.startQuest(parentID)

    sm.sendNext("O'hana taru'teha. May the Spirits of the Jungle guide your path.")