# [Temple of Time] Seeking Lost Memories [Explorer Magician]
# 3524
# Grendel the Really Old (1032001)

recoveredMemory = 7081

grendel = 1032001

sm.setSpeakerID(grendel)
sm.sendNext("That is some greatly refined magic. Something possessed only by those who call themselves great wizards... "
"Come to think of it, there was a beginner a long time ago who showed great potential to become a great wizard. "
"The name was... #h #.")
sm.sendSay("You were just a beginner who didn't even know how to use Energy Bolt. "
"Now, look at you! You're all grown up! I'm so proud. I knew you could do it.")
sm.sendSay("Continue to grow and advance. "
"As the one who has made you into a wizard, I can promise you that you will become a more powerful wizard...")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)