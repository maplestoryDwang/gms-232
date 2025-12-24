# Puking Expression
# 6505
# Tangyoon (1092000)

tangyoon = 1092000
lana = 1052121

queasy = 5160019

sm.setSpeakerID(tangyoon)
sm.sendNext(sm.join(["Hmm... You're that #h # person #p", repr(lana), "# mentioned? "
"You look like a normal person...why would you want to eat... Oh, never mind. "
"Here's the dish #p", repr(lana), "# ordered for you. Enjoy..."]))

sm.setPlayerAsSpeaker()
sm.sendSay("#b(You ate the food #p" + repr(tangyoon) + "# gave you... "
"You were a bit nervous at first, but it tasted rather good.)")

sm.setSpeakerID(tangyoon)
sm.sendSay("Is it good? Of course it's good! "
"I, the great #p" + repr(tangyoon) + "#, can make anything taste good! "
"Even if it is made of Snail eye boogers, Pig toe nails, Curse Eye tongues...")

sm.setPlayerAsSpeaker()
sm.sendSay("#b(Those ingredients... You feel like you're going to throw up!)")

sm.setSpeakerID(tangyoon)
sm.sendSay("I even included Orange Mushroom slime, Stump bile, Kiyo gizzards, and Slime bones... "
"I'm stunned you ate it all... Hey, you okay? Wait a minute, you can't throw up here! \r\n\r\n"
"#fUI/UIWindow2.img/QuestIcon/4/0# \r\n"
+ sm.formatInlineItem(queasy) + " x 1")

sm.giveItem(queasy)
sm.completeQuest(parentID)

sm.setPlayerAsSpeaker()
sm.sendNext("#b(You learned the Puking Expression.)")