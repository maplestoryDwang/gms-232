# Sparkling Expression
# 6514
# Mini (2041009)

mini = 2041009

ray = 5160027

sm.setSpeakerID(mini)
sm.sendNext("AH! Aren't you #h #? I've heard so much about you! "
"The adventurer who defeats Ghost Pirates and Dual Ghost Pirates like they're insects! "
"And you're so charming...am I dreaming? \r\n\r\n"
"#fUI/UIWindow2.img/QuestIcon/4/0# \r\n"
+ sm.formatInlineItem(ray) + " x 1")

sm.giveItem(ray)
sm.completeQuest(parentID)

sm.setPlayerAsSpeaker()
sm.sendNext("#b(You learned the Sparkling Expression from Mini. "
"But...Mini always has that expression. "
"Did you really have to defeat all those monsters to learn this expression?)")