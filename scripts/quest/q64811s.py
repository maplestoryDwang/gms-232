# [NLC] A Temporary Shelter
# 64811
# Corine (9201094)

corine = 9201094

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
sm.sendNext("While you were facing the screamers, I staked out a safe clearing deeper in the jungle!")
response = sm.sendAskYesNo("To expedite my investigation, I'll be setting up camp there from here on out. "
"Could you come visit me in the #bJungle Clearing#k?")
if response:
    sm.startQuest(parentID)