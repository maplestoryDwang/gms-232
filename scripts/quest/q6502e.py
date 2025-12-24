# Suspicious Expression
# 6502
# Chief Stan (1012003)

stan = 1012003

constantSigh = 5160030

sm.setSpeakerID(stan)
sm.sendNext("What is it? Huh? You want to observe me? "
"What in the world are you talking about...I don't like this at all. "
"What is your goal? What is it that you want?")

sm.setPlayerAsSpeaker()
sm.sendSay("#b(Chief Stan's not turning you away, but he's not happy either. "
"That expression...maybe you can learn something from it.)")

sm.setSpeakerID(stan)
sm.sendSay("Hmm... I'm not happy about this. \r\n\r\n"
"#fUI/UIWindow2.img/QuestIcon/4/0# \r\n"
+ sm.formatInlineItem(constantSigh) + " x1")

sm.giveItem(constantSigh)
sm.completeQuest(parentID)

sm.setPlayerAsSpeaker()
sm.sendNext("#b(You learned the Suspicious Expression from Chief Stan!)")