# [Temple of Time] Seeking Lost Memories [Evan]
# 3540
# Chief Stan (1012003)

recoveredMemory = 7081

chiefStan = 1012003

sm.setSpeakerID(chiefStan)
sm.sendNext("啊，原来是你。没想到很久之后还能看到你。我很高兴看到曾经是青涩的新手的你成为了出色的战士。看到很久不见但还记得我的你，我的心里充满了温暖。你是在寻找遗忘的记忆吗？想起来那已经是很久很久以前的事了，事隔多年，真是让人怀念啊。这样吧。你再去#b旁观者#k吧。相信他会帮助你。那么再见……")
sm.sendSay("Well, I wouldn't go so far as to call it a memory, but... "
"When you, Gustav's shy little kid, stopped by on an errand... I had no idea that you'd rescue Camila! "
"Just look at you now, a bona fide hero of Maple World!")
sm.sendSay("It's amazing how time flies.")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)