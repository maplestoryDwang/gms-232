# [Temple of Time] A Quick Look Back [Luminous]
# 23523
# Lania (1032205)

recoveredMemory = 7081

lania = 1032205

sm.setSpeakerID(lania)
sm.sendNext("Luminous. What brings you here unannounced?")

sm.setPlayerAsSpeaker()
sm.sendSay("I wanted to see you.")

sm.setSpeakerID(lania)
sm.sendSay("You missed me, huh? Hehehe, don't blush, it's okay. "
"I wish I'd known you were going to come. I don't have anything to eat...")

sm.setPlayerAsSpeaker()
sm.sendSay("I need no sustenance, only the knowledge that you are safe.")

sm.setSpeakerID(lania)
sm.sendSay("That's sweet. Let me know ahead next time. "
"It's been too long since we sat down for a meal.")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)