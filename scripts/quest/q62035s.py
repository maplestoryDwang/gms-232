# id 62035 (For the Sake of Demon Science), field 701220000
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(9310597) # Zarak
sm.sendNext("多亏了你的帮助，妖怪宝珠的研究大大加速。这是一点礼物，请你收下。")
sm.completeQuestNoCheck(parentID)
sm.setSpeakerType(4)
sm.setSpeakerID(9310597) # Zarak
sm.sendSay("Perhaps we'll meet again, if it's meant to be. Farewell!")
sm.playExclSoundWithDownBGM("Field.img/masteryBook/EnchantSuccess", 100)
