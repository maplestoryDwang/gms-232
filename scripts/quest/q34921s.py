# id 34921 (Refuge Repairs), field 402000600
sm.setSpeakerID(3001402) # Ferret
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
res = sm.sendAskAccept("#face0#修理防具和避难处需要使用#r#m402000612##k的#o2400352#的#i4036346# #b#t4036346##k。你先去搜集#b20个#k，叽勒。")
sm.setSpeakerType(3)
sm.sendNext("#face0##t4036346#的问题是太软了，但是也没别的办法。可以用的就只有那个……嗯……那就拜托你了，叽，叽勒。")
sm.startQuest(parentID)
