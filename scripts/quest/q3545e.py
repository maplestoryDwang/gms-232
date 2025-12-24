# [Temple of Time] Seeking Lost Memories [Phantom]
# 3545
# Gaston (1401000)

recoveredMemory = 7081

gaston = 1401000

sm.setSpeakerID(gaston)
sm.sendNext("All that training must have tired you greatly. "
"Shall I prepare a hot bath? Some tea to soothe the nerves?")

sm.setPlayerAsSpeaker()
sm.sendSay("It's strange to see you acting as a butler, Gaston. "
"I remember the old days, when we first met...")

sm.setSpeakerID(gaston)
sm.sendSay("That was quite some time ago. I'm afraid my memories are not as clear as yours.")

sm.setPlayerAsSpeaker()
sm.sendSay("When I first met you, I wouldn't have trusted you to put me out if I'd been on fire. "
"Now, I can't imagine trying to get my shoes on in the morning without your help.")

sm.setSpeakerID(gaston)
sm.sendSay("I seem to recall a young, rich braggart who believed he was setting off on a noble adventure. "
"I think I still have the wallet I lifted off of you when you were berating me for my shabby clothing.")

sm.setPlayerAsSpeaker()
sm.sendSay("I was never that naive and you certainly never got my wallet off of me.")

sm.setSpeakerID(gaston)
sm.sendSay("Oh-ho! I beg to differ! You have been a snotty little brat since the moment I met you "
"and I would be happy to produce the ancient sticker-covered billfold should you truly require...")

sm.setPlayerAsSpeaker()
sm.sendSay("H-hey... here I am reminiscing with an old friend and you turn it nasty! "
"You are a hateful old man!")

sm.setSpeakerID(gaston)
sm.sendSay("You have ever remained open to objective critique, haven't you, master? "
"A paragon of self-improvement. Heheheh...")

sm.setPlayerAsSpeaker()
sm.sendSay("I know that laugh. You're mocking me! I hate it when you mock me!")

sm.setSpeakerID(gaston)
sm.sendSay("What ever do you mean? Hehehehe...")

sm.setPlayerAsSpeaker()
sm.sendSay("That old man will be the death of me... but I hope he never leaves.")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)