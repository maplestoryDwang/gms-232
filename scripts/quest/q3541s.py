# [Temple of Time] Seeking Lost Memories [Resistance]
# 3541
# Claudine (2151003)

recoveredMemory = 7081

claudine = 2151003

sm.setSpeakerID(claudine)
sm.sendNext("啊，原来是你。没想到很久之后还能看到你。我很高兴看到曾经是青涩的新手的你成为了出色的战士。看到很久不见但还记得我的你，我的心里充满了温暖。你是在寻找遗忘的记忆吗？想起来那已经是很久很久以前的事了，事隔多年，真是让人怀念啊。这样吧。你再去#b旁观者#k吧。相信他会帮助你。那么再见……")
sm.sendSay("Memories? Are you talking about our past together? "
"I can think of a few, but the one I remember most vividly is when you first came by the Underground Base, "
"saying you wanted to become part of the Resistance. "
"You were but a novice then... Look how strong you've become. Oh, how time flies!")
sm.sendSay("But, I don't think it's quite the time for us to sit back and reminisce. We're still in the middle of battle. "
"Why don't we talk about our memories after the Black Wings are defeated and our town is recovered? "
"Then, we can talk and laugh all night long.")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)