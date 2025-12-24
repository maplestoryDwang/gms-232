# id 34925 (Crystal Excavation), field 402000614
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendNext("#face0#We've got to find it. Looks like we've got no choice but to form a recovery team.")
sm.sendSay("#face0#Let's say... Ferret, Salvo, and-")
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
sm.sendSay("#face3#Ah! I don't want to go with him!")
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendSay("#face0#Ark, would you join the team too?")
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendSay("#face0#(Seeing more of this place might help me recover more of my memory.)")
sm.sendSay("#face0#Yeah, I'll help.")
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendSay("#face0#Okay, then we should head back to the refuge and get ready. And Ferret, see if you can figure out what's wrong with the signal detector.")
sm.startQuest(parentID)
sm.createQuestWithQRValue(34995, "00=h1;01=h1;10=h0;02=h1;11=h0;12=h0;04=h0;13=h0;05=h0;14=h0;23=h0;06=h0;15=h0;24=h0;07=h0;16=h0;17=h0;09=h0")
sm.warp(402000600)
