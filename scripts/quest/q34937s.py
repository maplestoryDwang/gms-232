# id 34937 (A Close Call), field 402000644
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendNext("#face5#I remember now. The device near the refuge drew power.")
sm.sendSay("#face5#That's why the Specters keep attacking. They want more of that power.")
sm.sendSay("#face8#The others are in danger!")
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
sm.sendSay("#face2#You're right... The signal's changed. Something's wrong...")
sm.sendSay("#face2#No! Monsters are headed straight for the refuge!")
sm.sendSay("#face2#There's a massive number of them this time. If they attack, our people are done for!")
sm.setInnerOverrideSpeakerTemplateID(3001512) # Digs
sm.sendSay("#face0#But if that happens, then this was all for nothing.")
sm.setInnerOverrideSpeakerTemplateID(3001509) # Salvo
sm.sendSay("#face2#Not yet. If we can beat the monsters to the refuge, we might still have a chance. We can just fly right out of here!")
sm.sendSay("#face3#We'll use the Crystal Energy Shaaard!\r\nThen the caravan will fly faaar!")
sm.setInnerOverrideSpeakerTemplateID(3001513) # Grit
sm.sendSay("#face0#What are we waiting for?!")
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendSay("#face5#No, that won't work. It takes too long to get the power source up and running. I'll think of something...")
sm.setSpeakerType(4)
sm.setSpeakerID(3001417) # Ferret
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
res = sm.sendAskAccept("#face0#Then I'll be waiting. Let me know when you've got something.")
sm.setSpeakerType(3)
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendNext("#face0#Hm... Okay, I've got it!")
sm.startQuest(parentID)
