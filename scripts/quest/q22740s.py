# id 22740 (A Whole New World), field 101020400
sm.lockInGameUI(True, False)
sm.removeAdditionalEffect()
sm.blind(True, 255, 0, 0, 0, 500)
sm.sendDelay(500)
sm.zoomCamera(0, 2000, 0, -144, 50)
sm.forcedFlip(True)
sm.blind(True, 255, 0, 0, 0, 0)
sm.sendDelay(1200)
sm.blind(False, 0, 0, 0, 0, 1000)
sm.sendDelay(1400)
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendNext("……这里是哪里？你是谁？")
sm.setInnerOverrideSpeakerTemplateID(1531004) # Three Moon
sm.sendSay("冷静点，你没事的。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face0##r#fs25#狗居然会说话？！")
sm.setInnerOverrideSpeakerTemplateID(1531004) # Three Moon
sm.sendSay("#face2#啊，仔细再一看，原来是狼啊，对不起。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("这里到底是哪里？我之前明明是在地铁里的啊？我难道是在做梦吗？")
sm.setInnerOverrideSpeakerTemplateID(1531004) # Three Moon
sm.sendSay("#face4#这不是梦，\r\n这个地方叫冒险岛世界。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face4#这里和你所生活的世界不一样，希望你还是早点适应比较好。")
sm.sendSay("#face4#比方说……")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face0#看到了吗？这便是魔法。")
sm.spawnNpc(1531010, -45, 0)
sm.showNpcSpecialActionByTemplateId(1531010, "summon", 0)
sm.moveNpcByTemplateId(1531010, True, 80, 100)
sm.sendDelay(500)
sm.sendNext("#face0#在你们所生活的世界是不存在的。")
sm.sendSay("……倒不像是在做梦。")
sm.sendDelay(500)
sm.showEffect("Effect/BasicEff.img/pang", 0, -145, 50, 0, 0, 1, 0)
sm.playSound("Kite/Crown", 100)
sm.spawnNpc(1531003, -145, 0)
sm.showNpcSpecialActionByTemplateId(1531003, "summon", 0)
sm.sendDelay(500)
sm.sendNext("#face0#我来正式介绍一下，我的名字叫#b内拉米迪奥内鲁尼亚。")
sm.sendSay("#face0#在古语里是月光下高贵的半个孩子，\r\n作为历史非常悠久的魔法师家族的继承人……")
sm.sendDelay(500)
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendNext("#face2##fs20#你到底在说什么啊，#b内罗。")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face2#哎，我不是内罗啦！！")
sm.sendSay("话说回来这里是哪里啊，内罗？")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face0#是我们救了你，你倒是听人家把话说完啊！！")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face0#你还记得自己被一个奇怪的#b白发男人#k攻击的事情吗？")
sm.sendDelay(1000)
sm.playSound("Sound/SoundEff.img/PvP/80001740_Use", 100)
sm.onLayer(500, "0", 800, -120, 12, "Map/Effect2.img/kinesis/chaNero", 5, True, -1, False)
sm.moveLayer(300, "0", -800, 0)
sm.sendDelay(5000)
sm.playSound("Sound/SoundEff.img/12thMS/jump_m", 100)
sm.offLayer(500, "0", False)
sm.moveLayer(300, "0", 800, 0)
sm.sendDelay(1000)
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendNext("#face0#我本应该跟过去拦住你的……这是我的失策啊。\r\n我原以为离得近就可以跟得更敏捷一些，没想到反而跟丢了你。")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face0#总之这段时间你只能在这里了。")
sm.sendDelay(500)
sm.sendNext("那个，内罗，我完全不知道你在说什么。")
sm.sendSay("#face0#很快#b汉斯#k老师就要来了，详细的情况你可以听他跟你解释。\r\n在这之前还请你冷静一下，耐心等待。")
sm.sendSay("#face0#Regardless, you're here now. And we need to keep you here.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("Hey, Nero? I have no idea what you're talking about.")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face0#Fine, FINE! My teacher, #bGrendel the Really Old#k, is on his way. He's old and smart-looking, so maybe you'll listen to him. Just sit tight.")
sm.sendDelay(500)
sm.showFadeTransition(0, 1000, 3000)
sm.zoomCamera(0, 1000, 2147483647, 2147483647, 2147483647)
sm.moveCamera(True, 0, 0, 0)
sm.sendDelay(300)
sm.removeOverlapScreen(1000)
sm.lockInGameUI(False, True)
sm.completeQuestNoCheck(parentID)
sm.completeQuestNoCheck(parentID)
sm.startQuest(11620)
sm.createQuestWithQRValue(15710, "lasttime=19/07/16/05/46")
