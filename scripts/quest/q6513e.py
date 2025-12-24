# Kissing Expression
# 6513
# Plastic Roy (2012036)

roy = 2012036

diamond = 4021007
smoochies = 5160022

sm.setSpeakerID(roy)
sm.sendNext("Oh! Oh my! Aren't you a beautiful person? Such Charm! "
"I can't even look straight into your eyes. Ah, what is this bliss? "
"...Oh, you want to learn the kissing expression?")
sm.sendSay("For someone as charming as you, you can just pucker your lips. "
"That's enough. No, no, no payment is necessary. "
"You've made me happy just by letting me gaze upon your beauty. \r\n\r\n"
"#fUI/UIWindow2.img/QuestIcon/4/0# \r\n"
+ sm.formatInlineItem(smoochies) + " x 1")

sm.giveItem(smoochies)
sm.completeQuest(parentID)

sm.setPlayerAsSpeaker()
sm.sendNext("#b(You learned the Kissing Expression from Plastic Roy. "
"You didn't need the #t" + repr(diamond) + "#.)")