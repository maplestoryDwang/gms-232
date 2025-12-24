# id 34924 (Crystal-Powered Airship), field 402000614
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendNext("#face0#Ferret, see the empty space there? Ark says this ship will work if we can find the Crystal Energy Shard that fits into it.")
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
sm.sendSay("#face0#...")
sm.sendSay("#face0#Hm, okay... I just need to pick up this signal...")
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendSay("#face3#Oh, please! I really hope you've got enough to go on.")
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
sm.sendSay("#face4#Ha! Got it! It's weak, but it should be enough. If we can find the complementary signal to this, we'll find the crystal.")
sm.sendSay("#face0#But, the signal we're looking for seems to be scattered. Like it's broken maybe?")
sm.sendSay("#face0#It's close by, but also far away. I'm just not sure.")
sm.completeQuestNoCheck(parentID)
sm.startQuest(11620)
sm.createQuestWithQRValue(15710, "lasttime=19/02/21/12/44")
sm.createQuestWithQRValue(parentID, "exp=1;e1=1")
