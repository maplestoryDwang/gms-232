# [NLC] Welcome Back to NLC!
# 64801
# Icebyrd Slimm (9201050)

admin = 2007
icebyrd = 9201050

nlc = 600000000

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(admin)
sm.sendNext("This quest line contains stories set after the Masteria Epic storyline.")

sm.setInnerOverrideSpeakerTemplateID(icebyrd)
sm.sendNext("Well, if it isn't the #bSearcher of Truth#k! How have you been?")

sm.setParam(57)
sm.sendNext("Long time no see, Mayor. I've been doing well. "
"Have things been going smoothly in New Leaf City?")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(icebyrd)
sm.sendNext("Haha. I heard about what happened with you and Professor Foxwit. \r\n"
"Getting to experience the ancient legend yourself--makes me kinda jealous.")
response = sm.sendAskYesNo("We've had some public safety issues cropping up in NLC recently, "
"and honestly, I wouldn't turn down an extra pair of hands. Would you mind paying a visit to NLC? #r\r\n"
"You'll be moved to NLC immediately upon acceptance. "
"You'll be able to move to NLC afterwards via the Dimensional Mirror.")
if response:
    sm.startQuest(parentID)
    sm.completeQuest(parentID)
    if sm.getFieldID() != nlc:
        sm.setReturnField()
        sm.warp(nlc)