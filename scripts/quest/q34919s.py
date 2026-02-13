# id 34919 (Food Storage Shortage), field 402000600
sm.setSpeakerID(3001401) # Salvo
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001509) # Salvo
res = sm.sendAskAccept("#face4#在这个行星上，我们商队靠吃#r#m402000611##k的#o2400351#的肉为生↗\r\n去搜集#i4036345# #b#t4036345##k！先搜集#b20个#k↗")
if res:
    sm.setSpeakerType(3)
    sm.sendNext("#face3#哦，虽然难吃，但却是我们的主食。哦，音乐是我的食量，耶～")
    sm.startQuest(parentID)
