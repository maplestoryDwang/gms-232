# [NLC] A Temporary Shelter
# 64811
# Corine (9201094)

corine = 9201094

jungleClearing = 600010140

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
if sm.getFieldID() == jungleClearing:
    sm.sendNext("Salu! You made it!")
    
    sm.completeQuest(parentID)
    sm.chatScript("You can now enter the Krakian Altar!")
else:
    sm.sendNext("Could you come visit me in the #bJungle Clearing#k?")