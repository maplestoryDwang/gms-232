# Wink Expression
# 6511
# Sirin (2101000)

sirin = 2101000

wink = 5160023

sm.setSpeakerID(sirin)
sm.sendNext("Hello, #h #! What's up? You want to learn how to wink? Hm. "
"Winking is the source of my income... Well, I guess it's fine if you're not a dancer. "
"Sure. I'll teach you.")

sm.giveItem(wink)
sm.completeQuest(parentID)

sm.sendNext("All right, let me teach you the art of the wink. Close one eye. No, just one! "
"Okay, that's fine...wait, don't frown! You need to smile. "
"The wink has to be refreshing...you closed both eyes again! Okay, no, open that one... "
"Okay, there! It's not good as my wink, but it's not bad, either. Is that good enough? \r\n\r\n"
"#fUI/UIWindow2.img/QuestIcon/4/0# \r\n"
+ sm.formatInlineItem(wink) + " x 1")

sm.setPlayerAsSpeaker()
sm.sendSay("#b(You learned the Wink Expression from Sirin.)")