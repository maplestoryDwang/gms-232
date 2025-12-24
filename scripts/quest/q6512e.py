# Rage Expression
# 6512
# Sunny (2012013)

sunny = 2012013

gloves = 4032935
flaming = 5160026

sm.setSpeakerID(sunny)
sm.sendNext("Hello, are you here to take a boat? Let me guide you... Ah! "
"Those are my missing gloves! You got it off Crimson Balrog? Thank you so much!")

sm.giveItem(flaming)
sm.completeQuest(parentID)
sm.consumeItem(gloves)

sm.sendNext("...Hey! These gloves are all torn up! They were so expensive...! "
"CRIMSON BALROG, YOU WILL SUFFER! I've got to start training until I can make him pay. "
"There will be blood!! \r\n\r\n"
"#fUI/UIWindow2.img/QuestIcon/4/0# \r\n"
+ sm.formatInlineItem(flaming) + " x 1")

sm.setPlayerAsSpeaker()
sm.sendSay("#b(You learned the Rage Expression from Sunny.)")