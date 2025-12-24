# Awakened Spirit
# 57461
# Haku (9130081)

spiritShroom = 4033278
hakuMount = 80001157

haku = 9130081

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(haku)
sm.sendNext("#face0#I feel great! The spiritual energy in the mushroom beefed up my reserves.")
sm.sendNext("#face0#(Munch, munch, munch.)")
sm.sendNext("#face0#Carrying you should be a piece of cake now. "
"Let me know when you need a ride. I'll just be chomping on more of this delicious mushroom.")

sm.completeQuest(parentID)
sm.giveSkill(hakuMount)
sm.consumeItem(spiritShroom)