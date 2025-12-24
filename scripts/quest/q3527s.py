# [Temple of Time] Seeking Lost Memories [Explorer Pirate + Jett]
# 3527
# Kyrin (1090000)

recoveredMemory = 7081

kyrin = 1090000

sm.setSpeakerID(kyrin)
sm.sendNext("A stable position, with a calm demanor-- but I can tell you're hiding your explosive attacking abilities-- "
"you've become quite an impressive pirate, #h #. It's been a while.")
sm.sendSay("You used to be a kid that was scared of water-- and look at you now. "
"I knew you'd grow to a formidable pirate, but like this? I am thrilled to see you all grown up like this.")
sm.sendSay("What I can tell you is-- keep going. "
"As the person responsible for making you a pirate, I have no doubt in my mind that you still have room to grow-- "
"and that you will become an even more powerful force.")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)