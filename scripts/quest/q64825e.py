# [NLC] Refined Living
# 64825
# The Glimmer Man (9201083)

glimmerMan = 9201083

lianium = 4009481

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(glimmerMan)
sm.sendNext("Ah, you've returned. So, have you brought what I asked for?")
sm.sendNext("Hahaha... Fantastic! I'm starting to like you more with every passing hour, my friend.")
sm.sendNext("Speak with me again and I'll give you your reward.")

sm.giveExp(5457600)
sm.completeQuest(parentID)
sm.consumeItem(lianium)