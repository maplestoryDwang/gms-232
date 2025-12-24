# [NLC] The Final Clue
# 64819
# Elpam Gorlab (9201055)

elpam = 9201055

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(elpam)
response = sm.sendAskYesNo("#face0#If you happen to come across some #bRefined Lianium#k during your travels in Masteria, "
"would you bring it to me?")
if response:
    sm.startQuest(parentID)

    sm.sendNext("#face0#Ah, many thanks! I wish you luck in your endeavors.")