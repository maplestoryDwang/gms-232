#34567 [Esfera]  The Missing Sun
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003501) #Melange
sm.sendSay("#face0#Why no sun? I don't like that.")
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
sm.sendSay("#face0#I mean... What does this mean?")
sm.setInnerOverrideSpeakerTemplateID(3003501) #Melange
sm.sendSay("#face0#Umm... Good question. I don't know, but this might help you figure it out. Here, it's a staff that plays back memories.")
sm.setParam(56)
sm.sendSay("A staff that... How does that even work?")
sm.setParam(36)
sm.sendSay("#face0#Glad you asked. Here are the instructions")
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
sm.sendSay("#face0#Let's see, step 1... Follow the direction the staff points to an area of strong memories.")
if sm.sendAskYesNo("#face0#It's pointing to the right. I think that means we should head for #bLiving Spring 5#k"):
    sm.sendSay("#face0#I'll scout ahead and make sure we're not getting ourselves into trouble! Er, more trouble.")
    sm.setInnerOverrideSpeakerTemplateID(3003502) #Shubert
    sm.sendSay("#face0#Go on, girl. I'll get our comms back up and running. And let me know if anything needs blowing up!")
    sm.startQuest(parentID)
    sm.createQuestWithQRValue(34560, "30=h0;40=h0;41=h0;42=h0;43=h0")