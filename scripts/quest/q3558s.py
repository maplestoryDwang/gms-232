# [Temple of Time] Seeking Lost Memories [Dual Blade]
# 3558
# Ryden (1057001)

recoveredMemory = 7081

ryden = 1057001

sm.setSpeakerID(ryden)
sm.sendNext("D-Do I remember when we first met? Of course I do! "
"I was so excited to see such a skilled warrior entering the Secret Garden. "
"I had high hopes for you, you know.")
sm.sendSay("You didn't let me down... You made me proud of being your teacher...")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)