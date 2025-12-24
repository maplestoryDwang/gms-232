# id 22741 (Enjoying the Wait 1), field 101020400
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendNext("So I'll only get a proper explanation from this Grendel guy, right? Wouldn't it be faster if I went to him? ")
sm.setInnerOverrideSpeakerTemplateID(1531004) # Three Moon
sm.sendSay("Waiting is the path to training your soul. I sense you are unhappy doing so.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("...? ")
sm.setInnerOverrideSpeakerTemplateID(1531004) # Three Moon
sm.sendSay("The hour of supper approaches, and finds us unprepared. I shall attend to our feast, and hope that you would do the same.")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
res = sm.sendAskYesNo("#face0##ho#, Grendel the Really Old will be here soon. We've got time to gather some #beggs#k, so let's do that. Hunting #bsparrows#k will get you what we need.")
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendNext("Hunt? Now that I can do. It'll be nice to see what's around here, too. By all means, lead the way.")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face1#We can leave to the #bright#k. Boy, I love eggs! Especially if Three Moon is cooking ")
sm.startQuest(parentID)
