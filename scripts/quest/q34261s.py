# id 34259 ([Morass] The Reunion), field 450006240
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3003408) # Researcher
sm.sendSay("#face0#His majesty is growing impatient.")
sm.sendSay("#face0#What should we do? We can't minimize the rejection value...")
sm.sendSay("#face0#Have we exhausted even the high priest's abilities?")
sm.setParam(56)
sm.sendSay("What's going on?")
sm.setParam(36)
if sm.sendAskYesNo("#face0# We're preparing for an unscheduled experiment. \r\nCould you gather some materials?"):
    sm.setParam(56)
    sm.sendSay("Sure.")
    sm.setParam(36)
    sm.sendSay("#face0#I need some of that #bRed Reagent#k in either #bShadowdance Hall 3 or 4#k.")
    sm.startQuest(parentID)
