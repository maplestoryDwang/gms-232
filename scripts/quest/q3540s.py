# [Temple of Time] Seeking Lost Memories [Evan]
# 3540
# Chief Stan (1012003)

recoveredMemory = 7081

chiefStan = 1012003

sm.setSpeakerID(chiefStan)
sm.sendNext("Wow, Evan! How nice to see you! Indeed, I have so many memories of you...")
sm.sendSay("Well, I wouldn't go so far as to call it a memory, but... "
"When you, Gustav's shy little kid, stopped by on an errand... I had no idea that you'd rescue Camila! "
"Just look at you now, a bona fide hero of Maple World!")
sm.sendSay("It's amazing how time flies.")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)