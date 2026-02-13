# [Temple of Time] Seeking Lost Memories [Explorer Pirate + Jett]
# 3527
# Kyrin (1090000)

recoveredMemory = 7081

kyrin = 1090000

sm.setSpeakerID(kyrin)
sm.sendNext("啊，原来是你。没想到很久之后还能看到你。我很高兴看到曾经是青涩的新手的你成为了大魔法师。看到很久不见但还记得我的你，我的心里充满了温暖。你是在寻找遗忘的记忆吗？想起来那已经是很久很久以前的事了，事隔多年，真是让人怀念啊。这样吧。你再去#b旁观者#k吧。相信他会帮助你。那么再见……")
sm.sendSay("You used to be a kid that was scared of water-- and look at you now. "
"I knew you'd grow to a formidable pirate, but like this? I am thrilled to see you all grown up like this.")
sm.sendSay("What I can tell you is-- keep going. "
"As the person responsible for making you a pirate, I have no doubt in my mind that you still have room to grow-- "
"and that you will become an even more powerful force.")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)