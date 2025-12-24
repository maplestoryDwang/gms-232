# [NLC] Suspicious Surroundings
# 64820
# Icebyrd Slimm (9201050)

icebyrd = 9201050

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(icebyrd)
sm.sendNext("Ah, the honorary sheriff of NLC returns! Is something the matter?")

sm.setParam(57)
sm.sendNext("I've learned that some foreigners have appeared in the jungle, "
"and they appear to be tearing through with little regard for the environment.")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(icebyrd)
sm.sendNext("Quick and precise reporting, just as I've come to expect from you.")

sm.completeQuest(parentID)

sm.sendNext("Your timing couldn't be better, too. I just asked Professor Foxwit for his research results.")