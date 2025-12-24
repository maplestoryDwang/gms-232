# [Temple of Time] Seeking Lost Memories [Demon]
# 3544
# No NPC

recoveredMemory = 7081

sm.flipDialoguePlayerAsSpeaker()
sm.sendNext("Memories? What memories? When I served the Black Mage, or when I did battle with him? "
"Or when I awoke from my egg in those strange mines?")
sm.sendSay("Do I even have happy memories? Yes... "
"Memories of my family, my family. Hm...")
sm.sendSay("Honestly, I enjoyed sparring with Mastema, as well. "
"Perhaps things to do not need to be all gloom and fury...")
sm.sendSay("(Recalling your memories has given you a healthier perspective on life.)")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)