# [NLC] Flushing Out the Featherweights
# 64804
# Lita Lawless (9201054)

lita = 9201054

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(lita)
sm.sendNext("Congrats. You're not as incompetent as you look. "
"And here I had you pegged as some bumbling noob.")

sm.setParam(57)
sm.sendNext("(Uh...jumping to conclusions a little there?)")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(lita)
sm.sendNext("Anyway, next up we've got some good ol' public safety work. "
"You ready to keep the peace?")
response = sm.sendAskYesNo("I don't know if you had a chance to look around outside the city earlier, "
"but we've had some rambunctious Slimes disturbing visitors and making a nuisance of themselves. "
"That means it's time to take out about 200 or so. That ought to get them to simmer down.")
if response:
    sm.startQuest(parentID)

    sm.setParam(57)
    sm.sendNext("Slimes? What harm can they really do?")

    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(lita)
    sm.sendNext("Look. I've been a Thief for a long time now, "
    "and I understand just how cunning even seemingly harmless monsters can be.")
    sm.sendNext("Sure, they might look all cuddly and cutesy, but they can be pretty sly. "
    "In this city, the slimes sometimes block the storm drains, or spoil perfectly good drops by oozing all over them.")
    sm.sendNext("Before they get a chance to multiply and cause even more trouble for me, "
    "we need to cull the population.")