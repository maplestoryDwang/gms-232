# id 64021 ([MONAD: The First Omen] Town Reconstruction), field 867200400
sm.lockInGameUI(True, False)
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(9400589) # Peytour
sm.sendNext("#face0#你们来啦！")
sm.setInnerOverrideSpeakerTemplateID(9400582) # Cayne
sm.sendSay("#face0#你比我们到得还快啊？")
sm.setInnerOverrideSpeakerTemplateID(9400589) # Peytour
sm.sendSay("#face0#嗬嗬-我找不到合适的地方安置他，就给他带到这里来了。")
sm.setInnerOverrideSpeakerTemplateID(9400580) # Alika
sm.sendSay("#face0##h0#，这么冷的天，辛苦你了。")
sm.setInnerOverrideSpeakerTemplateID(9400582) # Cayne
sm.sendSay("#face0#怎么不说我也辛苦了！")
sm.setParam(57)
sm.sendSay("#b佩图尔，给你木材。")
sm.sendSay("#face0#好！那我们开始吧？")
sm.completeQuestNoCheck(parentID)
sm.startQuest(64023)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(9400589) # Peytour
sm.sendSay("#face0#哎呀呀，#h0#，我能再麻烦你一件事吗？")
sm.sendSay("#face0#我之前委托斯洛克帮忙搓绳子，可他到现在都没跟我联络。")
sm.sendSay("#face0#你代我去找他取绳子好吗？")
sm.sendSay("#b是的。")
sm.setParam(57)
sm.sendSay("#face0#他应该在村子入口。一有人靠近他就会一副不高兴的表情横着眼看人，很好找的。")
sm.setParam(37)
sm.sendSay("去找斯洛克取绳子。")
sm.lockInGameUI(False, True)
