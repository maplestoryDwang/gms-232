# id 34919 (Food Storage Shortage), field 402000600
sm.setSpeakerID(3001401) # Salvo
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001509) # Salvo
res = sm.sendAskAccept("#face4#On this planet, the caravan eats #o2400351# from #r#m402000611##k!\r\nYou'd really be helping if you could get us #i4036345# #b#t4036345##k x20!")
if res:
    sm.setSpeakerType(3)
    sm.sendNext("#face3#Ohhh, our staple food tastes so very very baaad. \r\nBut singing while eating makes me so very very glaaad!")
    sm.startQuest(parentID)
