# Raspberry Expression
# 6507
# Wing the Fairy (1032106)

wing = 1032106

orange = 2010003
bleh = 5160033

sm.setSpeakerID(wing)
sm.sendNext(sm.join(["Huh? What is it? I'm busy, human. Huh, what's that? A gift for me? "
"I don't like #t", repr(orange), "#s. No thanks. \r\n\r\n"
"#fUI/UIWindow2.img/QuestIcon/4/0# \r\n",
sm.formatInlineItem(bleh), " x 1"]))

sm.setPlayerAsSpeaker()
sm.sendSay("#b(With that, #p" + repr(wing) + "# sticks his tongue out and blows a raspberry at you. "
"Why must he always be so rude?)")

sm.setSpeakerID(wing)
sm.sendSay("Oh nooo, I'm not being rude at aaall! "
"This is the way we fairies say thank you, but no thanks. Don't humans do the same?")

sm.giveItem(bleh)
sm.completeQuest(parentID)

sm.setPlayerAsSpeaker()
sm.sendNext("#b(You learned the Raspberry Expression from Wing the Fairy. "
"You also learned the difference between fairy and human customs.)")