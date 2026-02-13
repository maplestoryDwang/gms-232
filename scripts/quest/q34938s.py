# id 34938 (Unleash the Specter), field 402000644
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendNext("#face5#我去当诱饵，你们守在这里。")
sm.sendSay("#face8#在收到避难处的成功信号之前……必须坚持住。")
sm.setSpeakerType(4)
sm.setSpeakerID(3001423) # Salvo
res = sm.sendAskAccept("#face5#尽我们的全力……好了，走吧。")
sm.warp(940205100)
