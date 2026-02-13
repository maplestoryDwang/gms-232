# id 34920 (Master Detector Ferret), field 402000600
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
sm.sendNext("#face2#哎呀，我在附近感觉到了奇怪的电波……位置……就在……附近……呃……")
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendSay("#face0#（说决定帮避难处做事，有什么需要就尽管说。）")
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
sm.sendSay("#face4#嗯……明白了，叽勒。对了，刚才看到的一定要跟妮雅队长和其他人保密。嗯……那个……我刚才在偷懒，叽勒。")
sm.sendSay("#face0#当，当然，我同意必须先重建避难处。但是……我们不能一直这样生活下去，叽勒……")
sm.sendSay("#face1#现在唯一的希望……就是找到原来乘坐的那艘船，叽勒。利用这个电波……叽，叽勒。")
sm.sendSay("#face4#但，但是现在必须先从最着急的事情做起。连你都来帮忙了，叽，叽勒楞……")
sm.completeQuestNoCheck(parentID)
sm.startQuest(11620)
sm.createQuestWithQRValue(15710, "lasttime=19/02/21/12/37")
sm.createQuestWithQRValue(parentID, "exp=1")
