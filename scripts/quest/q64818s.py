# [NLC] Traces of the Antellion
# 64818
# Elpam Gorlab (9201055)

elpam = 9201055

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(elpam)
sm.sendNext("#face0##rNaricain's Blood#k contains an energy similar to that of the #bAntellion#k, which is the foundation of Versal.")
sm.sendNext("#face0#To be more specific, it contains a particular trace mineral extremely common in Versal, "
"but which does not exist in Maple World.")
sm.sendNext("#face0#For further analysis, I'll need ecological information from a higher-level predator in Masteria's ecosystem.")
response = sm.sendAskYesNo("#face0#Do you think you could hunt 300 Ferocious Jungle Monkeys and collect ecological samples from them?")
if response:
    sm.startQuest(parentID)