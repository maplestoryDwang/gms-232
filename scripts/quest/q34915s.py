# id 34915 (Mar's in an Ocean of Trouble), field 402000615
sm.setSpeakerID(3001406) # Zippy
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
res = sm.sendAskAccept("#face2#You're gonna go save Mar? It's really dangerous! Are you sure you want to go?\r\n\r\n#b(If you accept, you'll travel there automatically.)#k")
if res:
    sm.warp(402090011)
