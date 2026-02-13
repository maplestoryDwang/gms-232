# id 64063 ([MONAD: The First Omen] Hawalu's Song), field 867201100
sm.showNpcSpecialActionByTemplateId(9400591, "summon", 0)
sm.lockInGameUI(True, False)
sm.sendDelay(300)
sm.moveNpcByTemplateId(9400591, True, 40, 50)
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(9400591) # Shulla
sm.sendNext("哈瓦尔！")
sm.flipNpcByTemplateId(9400593, False)
sm.sendSay("#h0#……哈瓦尔要是打扰了你们……")
sm.setParam(57)
sm.sendSay("#b哪里，反而哈瓦尔给我唱了歌，让我加油呢。")
sm.showEffect("Effect/OnUserEff.img/emotion/flower", 2000, 0, 0, 0, 33531306, 0, 0)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(9400593) # Hawalu
sm.sendSay("没错，妈妈！我给唱了歌哦！")
sm.setInnerOverrideSpeakerTemplateID(9400591) # Shulla
sm.sendSay("谢谢……哈瓦尔看起来很开心……谢谢，#h0#。")
sm.lockInGameUI(False, True)
sm.completeQuestNoCheck(parentID)
