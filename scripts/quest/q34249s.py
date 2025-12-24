# id 34249 ([Morass] The Flow), field 993017200
if sm.getFieldID() == 993017200:
    sm.setSpeakerType(3)
    sm.setParam(36)
    sm.setColor(1)
    sm.setInnerOverrideSpeakerTemplateID(3003409) # Flying Fish
    sm.sendNext("#face0#Bloop!")
    sm.setParam(56)
    sm.sendSay("Ah! That sound! That wonderful bubbly sound!")
    sm.setSpeakerType(4)
    sm.setSpeakerID(3003422) # Flying Fish
    res = sm.sendAskAccept("It can only mean one thing! The Flying Fish is back! Time to hurry over to #m450005400#!\r\n#b(If you accept, you'll travel there automatically.)")
    sm.warp(450005400)
elif sm.getFieldID() == 450005400:
    sm.setSpeakerType(3)
    sm.setParam(56)
    sm.setColor(1)
    sm.sendNext("Flying Fish! You're back!")
    sm.setParam(36)
    sm.setInnerOverrideSpeakerTemplateID(3003409) # Flying Fish
    sm.sendSay("#face0#Bloop!")
    sm.setParam(56)
    sm.sendSay("We did it! The forest is rebalanced, and the Arcane River's flow is back to normal! ")
    sm.setSpeakerType(4)
    sm.setSpeakerID(3003422) # Flying Fish
    res = sm.sendAskAccept("Time to Ride the Flying Fish to the next area!\r\n#b(You will move automatically when you accept.)")
    sm.startQuest(parentID)
    sm.completeQuestNoCheck(parentID)
    sm.warp(940204000)

