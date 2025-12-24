# id 34932 (Sandy Depths), field 402000631
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
sm.sendNext("#face2#What#e are#n those things swarming out of the sand like that?! They're horrible!")
sm.sendSay("#face2#We can't go anywhere with these blocking our way.")
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendSay("#face6#(There's something familiar about these creatures...)")
sm.completeQuestNoCheck(parentID)
sm.createQuestWithQRValue(parentID, "exp=1")
