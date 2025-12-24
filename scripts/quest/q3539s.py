# [Temple of Time] Seeking Lost Memories [Aran]
# 3539
# Lilin (1201000)

recoveredMemory = 7081

lilin = 1201000

sm.setSpeakerID(lilin)
sm.sendNext("Oh, hello Aran. What brings you all the way back to Rien?")
sm.sendSay("Memories? Memories with Aran... hmmm... there's plenty of that, of course. "
"Seeing you slowly piecing together your past while regaining the ability that made you a hero in the first place... "
"that itself is what I'd call fond memories...")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)