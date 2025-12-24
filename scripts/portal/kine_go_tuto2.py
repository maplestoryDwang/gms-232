# id 1 (go_tuto2), field 331001110
sm.lockInGameUI(True, False)
sm.playSound("Sound/Field.img/masteryBook/EnchantSuccess", 100)
sm.createQuestWithQRValue(22700, "V01=1;V02=1;E1=1")
sm.sendDelay(2500)
sm.playExclSoundWithDownBGM("Voice3.img/Kinesis/guide_04", 100)
sm.lockInGameUI(False, True)
sm.warp(-1)
