#34230 [Esfera]  The Strangers
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
sm.sendSay("#face0#Yeah, down here. Shubert, can you hear me?")
sm.setInnerOverrideSpeakerTemplateID(3003502) #Shubert
sm.sendSay("#face0#Loud and clear, Ollie. I'll get the gear to you no problem. All we need is a pully but someone has to go down there and get Tana.")
sm.setInnerOverrideSpeakerTemplateID(3003504) #Light Executor
sm.sendSay("#face0#We will stop the spider. But we have no power in the ocean.")
sm.setParam(56)
sm.sendSay("I'll...")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
sm.sendSay("#face0#Have you used this equipment before?")
sm.setParam(56)
sm.sendSay("Ah, no.")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
if sm.sendAskYesNo("#face0#Then I should go. You work the pulley."):
    sm.setInnerOverrideSpeakerTemplateID(3003502) #Shubert
    sm.sendSay("#face0##h #, don't you worry about a thing. Ollie's a sharp lady, she knows what she's doing.")
    sm.sendSay("#face0#You'll hear what's going on through our comms, so just pull her up if she gets in trouble.")
    sm.startQuest(parentID)
    sm.completeQuest(parentID)