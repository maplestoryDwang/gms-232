# id 34926 (Equipment Prep), field 402000600
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
sm.sendNext("#face0#Whenever we explore, it's inevitable that we will be separated at some point. That's why we need a special signal device.")
sm.sendSay("#face1#This one has a unique signal we can use to find each other.")
sm.sendSay("#face0#Since you're new, we'll have to make a new device for you. And mine needs to be repaired.")
sm.setSpeakerType(4)
sm.setSpeakerID(3001402) # Ferret
res = sm.sendAskAccept("#face4#We'll need a lot of supplies. Try finding #b20#k #i4036348# #b#t4036348##k items from #o2400354# monsters in #r#m402000616##k.")
sm.setSpeakerType(3)
sm.sendNext("#face0#I'll stay here and do some equipment maintenance to prep for the expedition.")
sm.startQuest(parentID)
