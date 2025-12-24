# [NLC] Flushing Out the Featherweights
# 64804
# Lita Lawless (9201054)

lita = 9201054

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(lita)
response = sm.sendAskYesNo("I've been waiting for your report. You finished the job just like I asked, right?")
if response:
    sm.sendNext("Good. You've got potential. At the very least, I know I can count on you to finish a task.")

    sm.giveExp(5457600)
    sm.completeQuest(parentID)