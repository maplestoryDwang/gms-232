# [Temple of Time] Seeking Lost Memories [Mihile]
# 3559
# Neinheart (1101002)

recoveredMemory = 7081

neinheart = 1101002

sm.setSpeakerID(neinheart)
sm.sendNext("Hi, #h #! It's been a while, huh?")
sm.sendSay("Memories? If you're referring to when we first met at Limbert's, yes, I remember. "
"You were... quite insignificant back then. Rather pathetic, if you ask me...")
sm.sendSay("Well, I guess it could be considered a fond memory of sorts...")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)