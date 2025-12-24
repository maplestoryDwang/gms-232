# [Temple of Time] Seeking Lost Memories [Resistance]
# 3541
# Claudine (2151003)

recoveredMemory = 7081

claudine = 2151003

sm.setSpeakerID(claudine)
sm.sendNext("Long time, no see, #h #. I heard you left Edelstein to grow stronger... What brings you here?")
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