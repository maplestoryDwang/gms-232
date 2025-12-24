# [NLC] You Know the Drill
# 64824
# The Glimmer Man (9201083)

glimmerMan = 9201083

giantDrill = 600010250
nlc = 600000000

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(glimmerMan)
sm.sendNext("Okay. Our next step is to destroy the Cerberusians' gigantic drill. "
"With that out of commission, they'll be back to square one.")
sm.sendNext("Let me know when you're ready, my friend. I'll teleport you right next to the drill.")
response = sm.sendAskYesNo("Are you ready, friend? #r\r\n"
"If you accept, you will begin the boss fight.")
if response:
    sm.startQuest(parentID)
    sm.warpInstanceIn(giantDrill, False)
    sm.setInstanceTime(20*60, nlc)