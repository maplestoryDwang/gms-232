# [Temple of Time] Seeking Lost Memories [Xenon]
# 3560
# No NPC
# To be replaced with GMS's exact dialogue.
# Following dialogue has been edited from DeepL on JMS's dialogue transcript (no KMS footage anywhere, current MSEA dialogue is practically nonsensical):
# https://kaengouraiu2.blog.fc2.com/blog-entry-46.html

recoveredMemory = 7081

rooD = 2300000

sm.setSpeakerID(rooD)
sm.sendNext("What? What's wrong?")

sm.setPlayerAsSpeaker()
sm.sendSay("Looking back now, I think everything began when we escaped from that lab. "
"So, I want to talk more about that time.")

sm.setSpeakerID(rooD)
sm.sendSay("Ugh... I really don't want to talk about that anymore. "
"I actually thought I was done for back then.")

sm.setPlayerAsSpeaker()
sm.sendSay("Hahaha, I see. But I still can't remember anything before that.")

sm.setSpeakerID(rooD)
sm.sendSay("#h #......")

sm.setPlayerAsSpeaker()
sm.sendSay("But even if I can't recall all of my memories, I'm glad I left the lab when I did.")
sm.sendSay("I may not remember everything from long ago, but now I have new memories that I can look back on. "
"I think it's all because of when we escaped together that day. Of course, I still haven't given up on remembering my past.")

sm.setSpeakerID(rooD)
sm.sendSay("That's right. There's still a long way to go. I'm sure there's still many more memories to make. Cheer up!")

sm.setPlayerAsSpeaker()
sm.sendSay("Yeah. Thanks Roo-D.")
sm.sendSay("(Recalling your memories has filled you with warmth.)")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)