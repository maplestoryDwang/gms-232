# id 34921 (Refuge Repairs), field 402000600
sm.setSpeakerID(3001402) # Ferret
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
res = sm.sendAskAccept("#face0#We use #i4036346# #b#t4036346##k from #o2400352# at #r#m402000612##k for all kinds of refuge and armor repairs. Why don't you bring back #b20#k for me?")
sm.setSpeakerType(3)
sm.sendNext("#face0#It's not perfect, but #t4036346# is the toughest material we've got out here. See what you can find.")
sm.startQuest(parentID)
