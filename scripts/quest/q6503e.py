# Surprised Expression
# 6503
# Hersha (1103003)

hersha = 1103003

curseEyeTail = 4000013
whoa = 5160029

sm.setSpeakerID(hersha)
sm.sendNext("Don't talk to me! Don't come any closer! Just say what you have to from there! "
"What makes you think I want your gift...? Fine, show me.")

sm.giveItem(whoa)
sm.completeQuest(parentID)
sm.consumeItem(curseEyeTail, 350)

sm.sendNext("AUGH! A snake! A SNAKE! Is it poisonous?! Contact the knights immediately! "
"...Wait a minute here, that's a #t" + repr(curseEyeTail) + "#! You scared the heck out of me. "
"Why would I want that?! \r\n\r\n"
"#fUI/UIWindow2.img/QuestIcon/4/0# \r\n"
+ sm.formatInlineItem(whoa) + " x 1")

sm.setPlayerAsSpeaker()
sm.sendSay("#b(You learned the Surprised Expression from Hersha.)")