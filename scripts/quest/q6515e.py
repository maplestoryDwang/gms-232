# Googly Eyes Expression
# 6515
# Pam (2081004)

pam = 2081004

sparkling = 5160025

sm.setSpeakerID(pam)
sm.sendNext("La la la! Oh, hello! What can I do for you? "
"Wow, isn't this a Harp's Tail? You're really giving me all these? "
"This will be great for keeping these eggs nice and warm! "
"Thank you so very much! \r\n\r\n"
"#fUI/UIWindow2.img/QuestIcon/4/0# \r\n"
+ sm.formatInlineItem(sparkling) + " x 1")

sm.giveItem(sparkling)
sm.completeQuest(parentID)

sm.setPlayerAsSpeaker()
sm.sendNext("#b(You learned the Googly Eyes Expression from Pam.)")