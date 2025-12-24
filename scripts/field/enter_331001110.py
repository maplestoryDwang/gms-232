# id 331001110 (Hideout : Training Room 1), field 331001110
sm.lockInGameUI(True, False)
sm.blind(True, 255, 0, 0, 0, 0)
sm.forcedFlip(True)
sm.removeAdditionalEffect()
sm.playSound("Sound/Ambience.img/flare_ready", 100)
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendNext("#face9#Testing, testing, 1, 2, 3. OK. I think you can hear me. You ready to show me your stuff, K?")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("I don't think so, Jay. Something is very wrong down here.")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face9#What? No. I double-checked everything. My gear is perfect and amazing.")
sm.blind(True, 255, 0, 0, 0, 0)
sm.sendDelay(300)
sm.blind(False, 0, 0, 0, 0, 250)
sm.sendDelay(300)
sm.sendDelay(4000)
sm.createFieldTextEffect("#fnﾳﾪﾴﾮﾰ￭ﾵ￱ ExtraBold##fs26#Kinesis's Hideout\r\n #fs14#- Training Room -", 100, 2500, 4, 0, 0, 1, 4, 0, 0, 0)
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendNext("Then why does it say I'm starting at #bLevel 10#k?")
sm.sendSay("Jay, you and I both know I can KILL it at #bLevel 10#k. Dial it up to something fun, will you?")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face9#Come on, K. I told you, I still need basic data on your agility and psychokinetic abilities. Since, y'know, you fried the hard drives I used last time.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("Not my fault if your tech can't keep up. Just make sure I don't get bored, alright?")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face9#Whatever, dude. Look, I just want some basic data for now. Move forward and follow the signs.")
sm.playSound("Sound/Field.img/flowervioleta/wink", 100)
sm.sendDelay(1000)
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendNext("Hold it. We're still missing something.")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face10#Seriously? What now?")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face3#We need music, man! Put on something for me to rock the block with.")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face9#......")
sm.playSound("Sound/SoundEff.img/blackHeaven/switch_push", 100)
sm.sendDelay(300)
sm.changeBGM("Bgm42/TheBeast2", 0, 0)
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendNext("#face2#Perfect. Let's get started.")
sm.showFadeTransition(0, 1000, 3000)
sm.zoomCamera(0, 3000, 0, 1477, -68)
sm.sendDelay(300)
sm.removeOverlapScreen(1000)
sm.playSound("Sound/SoundEff.img/PvP/80001740_Use", 100)
sm.onLayer(500, "0", 800, 0, 12, "Map/Effect2.img/kinesis/chaKine", 5, True, -1, False)
sm.moveLayer(300, "0", -800, 0)
sm.sendDelay(4500)
sm.playSound("Sound/SoundEff.img/12thMS/jump_m", 100)
sm.offLayer(500, "0", False)
sm.moveLayer(300, "0", 800, 0)
sm.sendDelay(500)
sm.showFadeTransition(0, 1000, 3000)
sm.zoomCamera(0, 1000, 2147483647, 2147483647, 2147483647)
sm.moveCamera(True, 0, 0, 0)
sm.sendDelay(300)
sm.removeOverlapScreen(1000)
sm.lockInGameUI(False, True)
sm.createQuestWithQRValue(22700, "V01=0")
sm.createQuestWithQRValue(22700, "V01=0;V02=0")
sm.createQuestWithQRValue(500725, "count=0")
