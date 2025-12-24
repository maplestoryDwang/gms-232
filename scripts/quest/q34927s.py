# id 34927 (Explosive Prep), field 402000600
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001509) # Salvo
sm.sendNext("#face0#Bang! Pow, pow! The sweet sound of demolition is my musical inspiration!")
sm.sendSay("#face0#Demolition is the most important part! \r\nHow else will we dig up that ancient art?")
sm.sendSay("#face0#If you have a bomb, you can find anything! \r\nEven with tons of dirt hiding your crystal bling!")
sm.setSpeakerType(4)
sm.setSpeakerID(3001401) # Salvo
res = sm.sendAskAccept("#face0#So I'm asking you for something very important! Materials for bo-bo-bombs!! Bring about #b20#k #i4036349# #b#t4036349##k items from #o2400355# monsters in #r#m402000618##k!")
sm.setSpeakerType(3)
sm.sendNext("#face0#Be careful! Demolition supplies are dangerous! Good luck!")
sm.startQuest(parentID)
