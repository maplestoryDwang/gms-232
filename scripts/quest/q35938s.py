# [Temple of Time] Seeking Lost Memories [Pathfinder]
# 35938
# Athena Pierce (1012100)

recoveredMemory = 7081

gender = chr.getAvatarData().getAvatarLook().getGender()
if gender == 1:
    pathfinder = 1013358
else:
    # Male Pathfinder
    pathfinder = 1013359
athena = 1540453

sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(athena)
sm.sendNext("Well, look who it is. It's been a while since I last saw you, #h #. "
"What brings you here today?")

sm.setInnerOverrideSpeakerTemplateID(pathfinder)
sm.sendNext("#face1#As I traveled, I sometimes thought back to a time I had fond memories of. "
"It was the day I first ventured out into the world. As I was about to leave, you pulled me aside to have a chat.")

sm.setInnerOverrideSpeakerTemplateID(athena)
sm.sendNext("Yes, I remember. As I recall, I lectured you on the prudence of tempering your insatiable curiosity "
"with a healthy measure of caution and restraint.")
sm.sendNext("But as I see you standing here now, I can't help but acknowledge how much you've grown. "
"Now, I wonder whether I was only half-right in my adivce to you back then.")
sm.sendNext("The world will always have need of those like me, who protect and maintain the path walked by many. "
"That said, we also have need of those who venture into the unknown. Those who discover new paths.")
sm.sendNext("People like you.")
sm.sendNext("I'll keep on doing my part here and wishing you luck out there as you blaze those new trails, #h #. "
"Remember not to hesitate, and to let your courage guide you.")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)