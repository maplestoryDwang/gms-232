# id 34924 (Crystal-Powered Airship), field 402000600
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendNext("#face0#I remembered something! That crystal near the refuge... It's broken, but there may be hope for getting out of here after all. It's linked to a transport! All we have to do is find all the pieces to get power flowing!")
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendSay("#face2#Wait... You mean if we find the power source, we could use that thing to get out of here?!")
sm.sendSay("#face0#What are the chances of finding something like that in this wasteland? This is great!")
sm.sendSay("#face2#This is just what we need for morale! Hope!")
sm.setSpeakerType(4)
sm.setSpeakerID(3001400) # Zippy
res = sm.sendAskAccept("#face0#You're going to help us find it, right?\r\n#b(If you accept, you'll travel to #m402000614# automatically.)#k")
sm.setSpeakerType(3)
sm.sendNext("#face0#All we need now is help from someone who knows a thing or two about finding stuff.")
sm.sendSay("#face0#I'll get Ferret and meet you at the crystal.")
sm.startQuest(parentID)
sm.warp(402000614)
