# id 34915 (Mar's in an Ocean of Trouble), field 402000615
sm.setSpeakerID(3001406) # Zippy
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
res = sm.sendAskAccept("#face2#你要去救马尔？啊，你也可能会有危险……真的要去吗？？\r\n\r\n#b（接受时，立即移动到商队避难处战场。）#k")
if res:
    sm.warp(402090011)
