# [Temple of Time] Seeking Lost Memories [Explorer Thief]
# 3526
# Dark Lord (1052001)
# To be replaced with GMS's exact dialogue.
# Following dialogue has been edited from DeepL on JMS's dialogue transcript (no KMS footage anywhere):
# https://kaengouraiu2.blog.fc2.com/blog-entry-46.html

recoveredMemory = 7081

darkLord = 1052001

sm.setSpeakerID(darkLord)
sm.sendNext("啊，原来是你。没想到很久之后还能看到你。我很高兴看到曾经是青涩的新手的你成为了大魔法师。看到很久不见但还记得我的你，我的心里充满了温暖。你是在寻找遗忘的记忆吗？想起来那已经是很久很久以前的事了，事隔多年，真是让人怀念啊。这样吧。你再去#b旁观者#k吧。相信他会帮助你。那么再见……")
sm.sendSay("Since when did you grow up to this point? You're no less inferior to any Dark Lord. "
"You were just a greenhorn that couldn't even hide their presence...Hmph, well, it's been a while since then. "
"Still, it feels weird to see you become so strong. I guess this is how it feels to be proud.")
sm.sendSay("But don't let your guard down. Know that there's still more progress to be made. "
"As the one who has made you into a thief, I know you that you can be even stronger...!")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)