# Cheering Expression
# 6510
# Rinz the Assistant (2012007)

rinz = 2012007

scissorhands = 1162003
sweetness = 5160021

sm.setSpeakerID(rinz)
sm.sendNext("Welcome! What can I do for you today? ...A gift? For me? "
"Wow, a customer's never given me a gift before!")

sm.giveItem(sweetness)
sm.completeQuest(parentID)
sm.consumeItem(scissorhands)

sm.sendNext(sm.join(["WOW! #t", repr(scissorhands), "#?! "
"The material...the color...the sound of the blades snipping together... "
"It's so beautiful! Thank you so much! You're the best, #h #! \r\n\r\n"
"#fUI/UIWindow2.img/QuestIcon/4/0# \r\n",
sm.formatInlineItem(sweetness), " x 1"]))

sm.setPlayerAsSpeaker()
sm.sendSay("#b(You learned the Cheering Expression from Rinz the Assistant.)")