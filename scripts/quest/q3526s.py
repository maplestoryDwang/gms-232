# [Temple of Time] Seeking Lost Memories [Explorer Thief]
# 3526
# Dark Lord (1052001)
# To be replaced with GMS's exact dialogue.
# Following dialogue has been edited from DeepL on JMS's dialogue transcript (no KMS footage anywhere):
# https://kaengouraiu2.blog.fc2.com/blog-entry-46.html

recoveredMemory = 7081

darkLord = 1052001

sm.setSpeakerID(darkLord)
sm.sendNext("The way you moved without a trace...you must have exceptional talent. "
"Long time no see, #h #.")
sm.sendSay("Since when did you grow up to this point? You're no less inferior to any Dark Lord. "
"You were just a greenhorn that couldn't even hide their presence...Hmph, well, it's been a while since then. "
"Still, it feels weird to see you become so strong. I guess this is how it feels to be proud.")
sm.sendSay("But don't let your guard down. Know that there's still more progress to be made. "
"As the one who has made you into a thief, I know you that you can be even stronger...!")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)