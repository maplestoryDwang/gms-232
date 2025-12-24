# A God Among Horses
# 57166
# Princess Sakuno (9130021)

sakuno = 9130021

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(sakuno)
sm.sendNext("#face0#Hayato, I have something to tell you. Please come to Momijigaoka.")

sm.setParam(57)
sm.sendSay("(I wonder what's going on... Maybe the Oda Army is on the move? "
"I need to return to Momijigaoka quickly.)")

sm.startQuest(parentID)
