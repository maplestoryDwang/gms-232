# Just a Little Test 2 (62113)

zhenLong = 9310532

redBeanPorridge = 4034643
garlic = 4034656

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(zhenLong)
sm.sendNext("I'm so sorry, but do you have the red bean porridge and the garlic?")

sm.completeQuest(parentID)
sm.giveExp(170598)
sm.consumeItem(redBeanPorridge)
sm.consumeItem(garlic)
sm.startQuest(62114)

sm.sendNext("Oh, thank goodness! I knew it. I knew it from the moment I looked at you. "
"But the test is required, and I am SO sorry for troubling you, but everything worked out!")
sm.sendNext("Pardon me for asking, but why do you look so confused?")

sm.setParam(57)
sm.sendNext("The chef promised that you'd fill me in, but you're just talking in circles. "
"WHAT IS GOING ON IN THIS STUPID GARDEN?!")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(zhenLong)
sm.sendNext("Well... A while back, black clouds rolled in over the city, and they've been looming over us. "
"It's been non-stop night ever since.")
sm.sendNext("It was great at first. Tourists poured in to party in the Pearl of the Night, but...")

sm.setParam(57)
sm.sendNext("But...?")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(zhenLong)
sm.sendNext("About a hundred days after the sun disappeared, weird things started happening. "
"Animals went haywire, and inanimate objects started malfunctioning. They seemed to have come to life. "
"But the worst part was...")
sm.sendNext("The worst part was when the jiangshi appeared...")

sm.setParam(57)
sm.sendNext("Jiangshi? What's that?")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(zhenLong)
sm.sendNext("They're the living dead. Animate corpses. They were a creature of legend, or so we all thought. "
"They have the most frightening hop...")
sm.sendNext("Those of us who escaped with our lives fled here to Yu Garden. "
"Legend says that the jiangshi are physically incapable of crossing the zigzag bridge...")
sm.sendNext("Luckily, it seems to be true... for now. "
"But I've heard rumors of jiangshi who can talk like us and bend their arms and legs... "
"That's why I thought of that test.")

sm.setParam(57)
sm.sendNext("Are the jiangshi allergic to red bean porridge and garlic or something?")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(zhenLong)
sm.sendNext("According to legend, yes, they are.")

sm.setParam(57)
sm.sendNext("...")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(zhenLong)
sm.sendNext("I'm so sorry! Since you passed the test, do you mind if I gave you a little token to celebrate? "
"I have it around here somewhere.")