# [Temple of Time] Seeking Lost Memories [Aran]
# 3539
# Lilin (1201000)

recoveredMemory = 7081

lilin = 1201000

sm.setSpeakerID(lilin)
sm.sendNext("啊，原来是你。没想到很久之后还能看到你。我很高兴看到曾经是青涩的新手的你成为了出色的战士。看到很久不见但还记得我的你，我的心里充满了温暖。你是在寻找遗忘的记忆吗？想起来那已经是很久很久以前的事了，事隔多年，真是让人怀念啊。这样吧。你再去#b旁观者#k吧。相信他会帮助你。那么再见……")
sm.sendSay("Memories? Memories with Aran... hmmm... there's plenty of that, of course. "
"Seeing you slowly piecing together your past while regaining the ability that made you a hero in the first place... "
"that itself is what I'd call fond memories...")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)