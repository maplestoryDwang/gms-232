# [Temple of Time] Seeking Lost Memories [Cannoneer]
# 3542
# Cutter (1096006)
# To be replaced with GMS's exact dialogue.
# Following dialogue has been edited from google translate on namu's quest dialogue transcript.

recoveredMemory = 7081

cutter = 1096006

sm.setSpeakerID(cutter)
sm.sendNext("Oh, it's been a while, #h #. I've heard you left the Nautilus and became more active. "
"You're the best Cannoneer that I've ever found. Hahaha!")
sm.sendSay("Memories? Our memories... That must be when we first met. "
"You were a useless rookie that cried about encountering a Balrog after drifting ashore on Coco Island... "
"You've grown strong so fast.")
sm.sendSay("(Cutter smiles as he looked towards the distant skies while reminiscing... "
"Tears began welling up in his eyes as he recalled these memories.)")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)