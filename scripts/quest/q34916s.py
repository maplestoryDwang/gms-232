# id 34916 (Caravan Leader Zippy), field 402000600
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendNext("#face2#We're so grateful to you for saving Mar. I'd like to pay you back, but... Well, as you can see, we don't have much to offer.")
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendSay("#face0#Actually, there are some questions I'd like to ask you. Would you be willing to answer them?")
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendSay("#face2#Well, I'm not sure I know anything you'd be interested in, but I'll do my best.")
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendSay("#face0#(As you explain your predicament and insist that you need to find a way to get off the planet, Zippy looks crestfallen.)")
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendSay("#face3#We don't know how to get out of here either. ")
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendSay("#face2#What!?")
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendSay("#face3#The other caravaners and I... we're not here by choice.")
sm.setSpeakerType(4)
sm.setSpeakerID(3001400) # Zippy
res = sm.sendAskAccept("#face0#I don't know much about this planet, but I can tell you more about our story.")
sm.setSpeakerType(3)
sm.sendNext("#face0#Just give me a moment to organize my thoughts.")
sm.startQuest(parentID)
