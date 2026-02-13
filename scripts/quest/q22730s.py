# id 22730 (Codebreaker Jay 2), field 331001000
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendNext("我分析过你昨天对付的那些东西了，但实在是搞不清楚那是什么。\r\n最为接近的应该就是鬼、幽灵那一类的吧。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("搞不清楚这一点确实有点可惜，不过应该能抓到一点线索吧，\r\n还有不管那是什么，有多少，我都会去对付的。")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("你这自信心倒是挺好的……\r\n你好像离我太近了，希望你能带着那只猫离我稍微远一点。\r\n它的脚掌……你是消过毒之后再摸的吧？呃……")
sm.sendSay("还有，我是看你好像还挺喜欢那些奇怪的幽灵才告诉你的，\r\n我又发现了另一条和昨天相似的暗号。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("好啊，那今天就再去看看吧？")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("等下，凯内西斯。\r\n在这之前我有话要说。")
sm.sendSay("#face0#你，昨天的事情，你有些事情没有告诉我吧，\r\n虽然只是很短的片刻，但是我们的通信曾经断过，\r\n那时候我检测到你的ESP限制器有异常反应。")
res = sm.sendNext("#face0#在学校里到底发生了什么事情？\r\n#b#L1#如实说出自己晕过去的事情#l\r\n#L2#说谎#l")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendNext("我一时失去了意识，而且我也无法控制自己的能力了，估计是因为我身体状态不是很好吧。")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("没什么事情，你不同太担心的。")
sm.lockInGameUI(True, False)
sm.changeBGM("Bgm00.img/Silence", 0, 0)
sm.playSound("Sound/SoundEff.img/radionoise", 100)
sm.playSound("Sound/Voice3.img/Kinesis/news_01", 100)
sm.progressMessageFont(3, 20, 20, 0, "We have breaking reports of a situation at Seoul's Hannam subway station.")
sm.sendDelay(3500)
sm.progressMessageFont(3, 20, 20, 0, "An unknown assailant has been attacking people at random in the area. ")
sm.sendDelay(3500)
sm.progressMessageFont(3, 20, 20, 0, "Citizens are advised to avoid the station.")
sm.sendDelay(2000)
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendNext("#face0#如此说来可就危险了，今天最好还是不要出行……")
sm.changeBGM("Bgm40.img/SecretMission", 0, 0)
sm.playSound("Sound/Voice3.img/Kinesis/news_02", 100)
sm.progressMessageFont(3, 20, 20, 0, "Again, the authorities are requesting that all citizens stay away")
sm.sendDelay(1500)
sm.progressMessageFont(3, 20, 20, 0, "from the Hannam station until this matter is resolved. ")
sm.sendDelay(1500)
sm.playSound("Sound/SoundEff.img/radionoise", 100)
sm.progressMessageFont(3, 20, 20, 0, "Do not leave your homes.")
sm.sendDelay(3000)
sm.lockInGameUI(False, True)
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
res = sm.sendNext("#face0#……真的吗？你不会对你的搭档说谎了吧？")
sm.createQuestWithQRValue(parentID, "done=1")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendNext("新闻速报,  在都市MS镇地铁历史上,  ")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("这是第一次有来历不明的生物对所有居民发动攻击. ")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("目前正在发生,  请附近居民小心外出. ")
sm.createQuestWithQRValue(22700, "V01=1;V02=1;q21end=0;coNight=1;kinetuto=1;kinetuto2=1;E1=1;blackCat=0;E2=1;E3=1")
sm.createQuestWithQRValue(22700, "V01=1;V02=1;q21end=0;coNight=0;kinetuto=1;kinetuto2=1;E1=1;blackCat=0;E2=1;E3=1")
sm.startQuest(parentID)
