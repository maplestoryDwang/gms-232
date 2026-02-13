# [Temple of Time] Seeking Lost Memories [Explorer Magician]
# 3524
# Grendel the Really Old (1032001)

recoveredMemory = 7081

grendel = 1032001

sm.setSpeakerID(grendel)
sm.sendNext("啊，原来是你。没想到很久之后还能看到你。我很高兴看到曾经是青涩的新手的你成为了大魔法师。看到很久不见但还记得我的你，我的心里充满了温暖。你是在寻找遗忘的记忆吗？想起来那已经是很久很久以前的事了，事隔多年，真是让人怀念啊。这样吧。你再去#b旁观者#k吧。相信他会帮助你。那么再见……")
sm.sendSay("You were just a beginner who didn't even know how to use Energy Bolt. "
"Now, look at you! You're all grown up! I'm so proud. I knew you could do it.")
sm.sendSay("Continue to grow and advance. "
"As the one who has made you into a wizard, I can promise you that you will become a more powerful wizard...")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)