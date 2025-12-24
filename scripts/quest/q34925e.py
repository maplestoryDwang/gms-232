# id 34925 (Crystal Excavation), field 402000600
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendNext("#face0#I'll gather rations, weapons, and armor from the other caravaners in the refuge.")
sm.sendSay("#face2#Ark, Ferret, and Salvo will need help getting organized and ready. Please take care of them.")
sm.sendSay("#face0#Visit Ferret first, then help Salvo. Once that's taken care of, we can meet up.")
sm.completeQuestNoCheck(parentID)
sm.startQuest(11620)
sm.createQuestWithQRValue(parentID, "exp=1")
