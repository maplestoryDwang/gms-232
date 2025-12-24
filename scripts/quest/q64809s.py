# [NLC] Escape from the Jungle
# 64809
# Elpam Gorlab (9201055)

elpam = 9201055

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(elpam)
sm.sendNext("#face0#Anyway, getting back to what I need your help with, "
"I'd like to conduct some research on the intertwined history of Masteria and Versal.")
sm.sendNext("#face0#The native flora in this area contains important ecological clues, "
"which can help us to better interpret the data we have. "
"That sometimes helps us fill in the unrecorded gaps in history.")
response = sm.sendAskYesNo("#face0#For that reason, I'd like to ask you to defeat roughly \r\n"
"100 #bMighty Maple Eater#k monsters in the Krakian Jungle \r\n"
"and collect samples of the flora.")
if response:
    sm.startQuest(parentID)

    sm.sendNext("#face0#Thank you! I'll be waiting for you here. Good luck.")