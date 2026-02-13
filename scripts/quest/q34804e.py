# id 34804 (Being Social), field 402000530
sm.lockInGameUI(True, False)
sm.removeAdditionalEffect()
sm.blind(True, 255, 0, 0, 0, 450)
sm.sendDelay(500)
sm.forcedFlip(True)
sm.sendDelay(500)
sm.blind(False, 0, 0, 0, 0, 1000)
sm.sendDelay(1000)
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001300) # Ex
sm.sendNext("#face0#嗯？怎么可能！你说被拒绝了？？")
sm.sendSay("#face1#看来你还没理解。我总不能把所有学生问个遍吧，别这样，快再试试……")
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face3#利奥……有些事情再努力也没用……还是……放弃吧……")
sm.spawnNpc(3001307, -50, 53)
sm.showNpcSpecialActionByTemplateId(3001307, "summon", 0)
sm.zoomCamera(2000, 1500, 2000, 370, 0)
sm.moveNpcByTemplateId(3001307, False, 300, 150)
sm.sendDelay(2500)
sm.setInnerOverrideSpeakerTemplateID(3001307) # Dean
sm.sendNext("#face0#喂，莫里奥！")
sm.setInnerOverrideSpeakerTemplateID(3001310) # Morian
sm.sendSay("#face0#你好！迪恩！")
sm.setInnerOverrideSpeakerTemplateID(3001307) # Dean
sm.sendSay("#face0#你有同伴？")
sm.setInnerOverrideSpeakerTemplateID(3001310) # Morian
sm.sendSay("#face1#同伴？还没找到！要不要跟我一组？")
sm.setInnerOverrideSpeakerTemplateID(3001307) # Dean
sm.sendSay("#face1#不是啦~~~我有同伴~~~噗哈哈！")
sm.sendSay("#face1#我问过了~！那我走了~！")
sm.setInnerOverrideSpeakerTemplateID(3001310) # Morian
sm.sendSay("#face2#什、什么？")
sm.sendSay("#face3#那家伙难道也被耍了……嘻嘻……")
sm.sendDelay(500)
sm.showFadeTransition(0, 1000, 3000)
sm.completeQuestNoCheck(34858)
sm.spawnNpc(3001310, 502, -105)
sm.showNpcSpecialActionByTemplateId(3001310, "summon", 0)
sm.removeOverlapScreen(1000)
sm.zoomCamera(1000, 1500, 1000, 370, -50)
sm.sendDelay(1500)
sm.sendNext("#face0#那个，现在好像只剩下我和你了。")
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face5#(啊！？你是在跟我说话吗？)")
sm.setInnerOverrideSpeakerTemplateID(3001310) # Morian
sm.sendSay("#face0#你好像只能跟我一组了，没关系吗？")
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face5#嗯、嗯！好！")
sm.setInnerOverrideSpeakerTemplateID(3001310) # Morian
sm.sendSay("#face1#你，看来就是今天新来的那个？你好，我是#b莫里奥#k。")
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face5#嗯，我是伊利温……")
sm.forcedFlip(True)
sm.setInnerOverrideSpeakerTemplateID(3001300) # Ex
sm.sendSay("#face0#你好，我是伊利温主人的第13号物品#b利奥#k。伊利温主人在11岁时制造了我，距离最后一次更新已经……")
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face3#利奥……")
sm.showFadeTransition(0, 1000, 3000)
sm.zoomCamera(0, 1000, 2147483647, 2147483647, 2147483647)
sm.moveCamera(True, 0, 0, 0)
sm.sendDelay(300)
sm.removeOverlapScreen(1000)
sm.blind(False, 0, 0, 0, 0, 1000)
sm.sendDelay(1000)
sm.sendDelay(100)
sm.completeQuestNoCheck(parentID)
sm.sendDelay(100)
sm.createQuestWithQRValue(parentID, "gossip=1;NpcSpeech=30013141/30013152/30013163/30013174/30013185;exp=1")
sm.lockInGameUI(False, True)
