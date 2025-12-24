# Spicy Expression
# 6509
# Alfonse Green (2012020)

alfonse = 2012020

fruit = 4032934
breath = 5160032

sm.setSpeakerID(alfonse)
sm.sendNext("Hm. That bread was so yummy, but I need something more... "
"Oh, is that fruit? It looks so very sweet! May I have some?")

sm.giveItem(breath)
sm.completeQuest(parentID)
sm.consumeItem(fruit)

sm.sendNext(sm.join(["HWAAAH! D-diz iz vewy ot! Wuh kiwa froo iz diz? "
"(This is very hot! What kind of fruit is this?!) "
"Eh? Ehendez froo? Aaaah! Buh duh seez zo goo! "
"(Eh? #t", repr(fruit), "#? Aaaaah! But the seeds're so good!) \r\n\r\n"
"#fUI/UIWindow2.img/QuestIcon/4/0# \r\n",
sm.formatInlineItem(breath), "# x 1"]))

sm.setPlayerAsSpeaker()
sm.sendSay("#b(You have no clue what he's saying. "
"However, you have learned the Spicy Expression from Alfonse Green.)")