# id 34249 ([Morass] The Flow), field 993017200
sm.setSpeakerType(3)
sm.setParam(56)
sm.setColor(1)
sm.sendNext("What are Xenoroids doing here?!")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003409) # Flying Fish
sm.sendSay("#face0#The Erdas here #bmimic the memories of others#k. It's a survival technique. They can become their enemy's greatest fear if need be.")
sm.sendSay("#face0#So, what you see here is from somewhere within your own memory.")
sm.setSpeakerType(3)
sm.setParam(56)
sm.sendSay("If everything mimics, then what about you?.")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003409) # Flying Fish
sm.sendSay("#face0#I learned this form in Chu Chu Island. As a flying fish, I can easily travel by both air and sea. Plus, I like the look! Isn't it pretty?")
sm.sendSay("#face0#Chu Chu is a fascinating place even for me. A fish with wings is about as strange as a Crilia.")
sm.setSpeakerType(3)
sm.setParam(56)
sm.sendNext("Actually, flying fish originated in Maple World.")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003409) # Flying Fish
sm.sendSay("#face0#You know, there are quite a few monsters following us. You should thin their numbers a bit before we continue.")
sm.setParam(56)
sm.sendNext("Well, that was an abrupt change of topic...")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003409) # Flying Fish
if sm.sendAskYesNo("#face0#I think 200 would be enough."):
    sm.startQuest(parentID)

