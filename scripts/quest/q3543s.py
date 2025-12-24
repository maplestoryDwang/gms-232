# [Temple of Time] Seeking Lost Memories [Mercedes]
# 3543
# No NPC

recoveredMemory = 7081

sm.flipDialoguePlayerAsSpeaker()
sm.sendNext("Memories...? From when? Perhaps when I battled the Black Mage with Aran, Freud, and the others? "
"Or when we finally sealed the Black Mage? No...maybe before all that. "
"When I became ruler of the Elves?")
sm.sendSay("It couldn't be when I awoke to find myself a helpless Level 10 monarch... could it? "
"Memories can be so confusing...")
sm.sendSay("(You recalled your entire past, unsure of which memories to focus on. "
"However, thinking over your life has filled you with warmth, and renewed your spirit.)")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)