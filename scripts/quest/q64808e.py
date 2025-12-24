# [NLC] Otherworldly Assistance
# 64808
# Elpam Gorlab (9201055)

elpam = 9201055

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(elpam)
sm.sendNext("#face0#I'm glad you decided to come. I'm Elpam the Historian. Pleased to make your acquaintance.")

sm.setParam(57)
sm.sendNext("You're not from around here, are you?")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(elpam)
sm.sendNext("#face0#I suppose I ought to explain my situation. I hail from a place called #b#eVersal#k#n. "
"Not many in Maple World are familiar with it, but it is a land with many ties to Masteria.")

sm.setParam(57)
sm.sendNext("Did you say Versal?")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(elpam)
sm.sendNext("#face0#I did indeed. The people of my world sometimes travel between dimensions. "
"I recently came here #bby chance#k, through my work as a historian, so I'm still getting accustomed to conversing in your language.")
sm.sendNext("#face0#When I first crash-landed in the jungle, I had no idea what to do. "
"But after meeting Corine, I was able to escape the green hell with her help.")
sm.sendNext("#face0#I consider myself immensely fortunate, both as a historian and a Versalian, "
"to have met a descendant of the ancient Krakians who once fought alongside my people long, long ago. "
"Truly, I can only say that it was the #bblessing of the ancestors#k, as Corine would put it.")

sm.setParam(57)
sm.sendNext("That's an incredible coincidence. As far as your speech, you sound completely fluent to me. "
"More importantly...what the heck smells like aged cheese? Am I going crazy?")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(elpam)
sm.sendNext("#face0#Oh, that. You're not the first to notice it. It's actually a rather famous vintage perfume in Versal.")

sm.setParam(57)
sm.sendNext("I can't say it's a scent I'd wear myself, but...more power to you.")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(elpam)
sm.sendNext("#face0#Thank you. You are indeed a kind soul, just as Corine said.")

sm.completeQuest(parentID)