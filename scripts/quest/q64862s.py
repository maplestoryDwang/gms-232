# [NLC] How to Use NLC Coins
# 64862
# Spindle (9201082)

spindle = 9201082

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(spindle)
sm.sendNext("Hey! I'm Spindle. I see Lita gave you a NLC Coin already.")
sm.sendNext("These coins were specially minted by the Mayor as tokens of gratitude for helping out around the city. "
"You can buy some neat souvenirs for one NLC Coin each from my shop in NLC's Town Center.")
sm.sendNext("Just be mindful that #rthere are only so many coins to go around for every visitor#k, so make your purchases wisely! ")
sm.sendNext("That's all I have to say about these coins. Hope to see you again soon!")

sm.startQuest(parentID)
sm.completeQuest(parentID)