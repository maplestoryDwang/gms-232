#34230 [Esfera]  The Strangers
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
sm.sendSay("#face0#What we just saw was the Temple of Light.")
sm.sendSay("#face0#Sometimes I can't believe I've seen Transcendents with my very own eyes... And they both looked like pretty normal girls, yeah? Was the one on the right Tana?")
sm.setParam(56)
sm.sendSay("Yeah. Man, every one of these memories just raises more questions.")
sm.sendSay("So Tana has power over Erda itself. Is that the power of the Transcendent of Light?")
sm.sendSay("Wait. Now that I think about it... What power does the Transcendent of Light actually have?")
sm.setParam(36)
sm.sendSay("#face0#Hm, good point, I don't think they cna make light or anything.")
sm.setInnerOverrideSpeakerTemplateID(3003504) #Light Executor
sm.sendSay("#face0#Light and darkness are an analogy.")
sm.setParam(56)
sm.sendSay("BwaaAAAHHHH!!!!")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
sm.sendSay("#face0#Y-you, you're the...")
sm.setInnerOverrideSpeakerTemplateID(3003504) #Light Executor
sm.sendSay("#face0#I am the Executor. I have no other name. I have no other form.")
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
sm.sendSay("#face0#Really? Then how do youy... Actually, nevermind. If light and darkness are an analogy, then what can the Transcendent of Light really do?")
sm.setInnerOverrideSpeakerTemplateID(3003504) #Light Executor
sm.sendSay("#face0#Follow me. See for yourself.")
sm.sendSay("Come to #bMirror-touched Sea 5#k.")
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
sm.sendSay("#face0#He disappeared.")
sm.sendSay("#face0#It might be a trap... But if it's not, we might finally start getting some answers from this place.")
if sm.sendAskYesNo("#face0#I think we should head to #bMirror-touched Sea 5#k"):
    sm.startQuest(parentID)
    sm.createQuestWithQRValue(34560, "30=h0;40=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0")