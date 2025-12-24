# id 34917 (Medical Supplies), field 402000600
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendNext("#face3#Was there something else? Or... is something wrong?")
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendSay("#face0#I'll stay here at the refuge and help you. Like you said, survival first, right?")
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendSay("#face2#We haven't even paid you back for saving Mar, but we really could use the help...")
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendSay("#face4#Don't worry. Helping you and finding a way out of here benefits all of us.")
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendSay("#face2#So, we're helping each other out. Okay. In that case, we could really use medical supplies to treat the wounded.")
sm.setSpeakerType(4)
sm.setSpeakerID(3001400) # Zippy
res = sm.sendAskAccept("#face2#Bring #b20#k #i4036344# #b#t4036344##k items from #o2400350# in #r#m402000610##k.")
sm.setSpeakerType(3)
sm.sendNext("#face2#I'm sorry again for being so mean to you before. Can't be too careful. See you soon!")
sm.startQuest(parentID)
