# id 34920 (Master Detector Ferret), field 402000600
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
sm.sendNext("#face2#Zzz... Ah! Suspicious signal! Right... near... uh...")
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendSay("#face0#I'm here to help the refuge reconstruction effort. What can I do?")
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
sm.sendSay("#face4#More help! Great! And don't forget, you never saw me snoozing on the job, okay?")
sm.sendSay("#face0#Rebuilding the refuge is top priority. Of course, we can't live like this forever.")
sm.sendSay("#face1#Survival is just the means to an end. One day, we'll find our ship again and get out of here. All I have to do is find the signal.")
sm.sendSay("#face4#For now, I'll take all the help I can get, and I have the perfect job for you.")
sm.completeQuestNoCheck(parentID)
sm.startQuest(11620)
sm.createQuestWithQRValue(15710, "lasttime=19/02/21/12/37")
sm.createQuestWithQRValue(parentID, "exp=1")
