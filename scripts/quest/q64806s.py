# [NLC] Traveling Checkpoint
# 64806
# Lita Lawless (9201054)

lita = 9201054

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(lita)
sm.sendNext("The last task I've got for you right now is to perform a routine identification "
"check-in for travelers who have recently come to NLC.")

sm.setParam(57)
sm.sendNext("People who recently came? Anything more specific to go on?")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(lita)
sm.sendNext("We have a lot of merchants coming in hoping to hawk their wares to the Explorers who pass through, "
"but to keep order in the city, we have to know who's here and what kind of business they're involved in.")
response = sm.sendAskYesNo("Can you check in with two of our most recent arrivals? "
"Their names are #bCorine#k and #bElpam#k.")
if response:
    sm.startQuest(parentID)