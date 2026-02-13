# id 35907 (Karuppa), field 100051000
sm.setSpeakerID(1013302) # Mascarpo
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1013353) # Mascarpo
res = sm.sendAskAccept("#face0#我也没办法把村民们全都叫出来。\r\n你最好先去跟那边的村长谈谈。")
sm.setSpeakerType(3)
sm.sendNext("#face0#如果你能先跟他熟悉起来,其他的朋友们也很快就会向你敞开心扉。\r\n好了,快去见见村长吧。")
sm.startQuest(parentID)
