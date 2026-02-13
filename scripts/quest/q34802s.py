# id 34802 (Collect Grossular), field 402000526
sm.lockInGameUI(True, False)
sm.removeAdditionalEffect()
sm.showFadeTransition(0, 1000, 3000)
sm.zoomCamera(500, 1000, 500, 50, -70)
sm.sendDelay(500)
sm.sendDelay(500)
sm.forcedFlip(True)
sm.spawnNpc(3001300, 602, -140)
sm.showNpcSpecialActionByTemplateId(3001300, "summon", 0)
sm.removeOverlapScreen(1000)
sm.sendDelay(500)
sm.sendDelay(3000)
sm.createFieldTextEffect("#fnﾳﾪﾴﾮﾰ￭ﾵ￱ ExtraBold##fs18#First Class: Understanding the Mytocrystal", 20, 2200, 6, -50, -50, 1, 4, 0, 0, 0)
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001302) # Professor Kalsat
sm.sendNext("#fn黑体##fs18#第一课：理解水晶")
sm.sendSay("#face0#好,那准备开始上课了。")
sm.sendSay("#face0#格兰蒂斯全域可采集的#b水晶#k自古以来就是我们民族的一种重要资源。")
sm.sendSay("#face0#我们翼人用从水晶中提取出的爆炸性的魔力获得了格兰蒂斯至高至上的力量。")
sm.setMapTaggedObjectVisible("c1_appear", True, 0, 0)
sm.playSound("Sound/SoundEff.img/illium/classroom_crystal", 100)
sm.sendDelay(500)
sm.sendDelay(500)
sm.setMapTaggedObjectVisible("c1_loop", True, 0, 0)
sm.setMapTaggedObjectVisible("c1_appear", False, 0, 0)
sm.sendDelay(100)
sm.sendDelay(500)
sm.sendNext("#face0#详细内容会在历史课讲解,今天来学习赋予我们力量的各种水晶。")
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face0#首先,哪个学生能说出散发神秘绿光水晶的名字？")
sm.setInnerOverrideSpeakerTemplateID(3001300) # Ex
sm.sendSay("#face0##fs12#钙铝榴石。")
sm.setInnerOverrideSpeakerTemplateID(3001302) # Professor Kalsat
sm.sendSay("#face0#主人,你这么小声,大家根本听不见。")
sm.setInnerOverrideSpeakerTemplateID(3001307) # Dean
sm.sendSay("#face0#哦,好吧,迪恩。你说说看。")
sm.setInnerOverrideSpeakerTemplateID(3001302) # Professor Kalsat
sm.sendSay("#face3#是#b钙铝榴石#k！！")
sm.setInnerOverrideSpeakerTemplateID(3001307) # Dean
sm.sendSay("#face0#这就结束了……？那我再仔细跟你说明一下。")
sm.sendSay("#face3#还有……那个……")
sm.setInnerOverrideSpeakerTemplateID(3001302) # Professor Kalsat
sm.sendSay("#face1#是啊……嘿嘿。")
sm.sendSay("#face0##b钙铝榴石#k主要分布在深林或丛林密布的地方,用于治疗伤口或恢复体力。")
sm.setMapTaggedObjectVisible("c2_appear", True, 0, 0)
sm.playSound("Sound/SoundEff.img/illium/classroom_crystal", 100)
sm.sendDelay(500)
sm.sendDelay(500)
sm.setMapTaggedObjectVisible("c2_loop", True, 0, 0)
sm.setMapTaggedObjectVisible("c2_appear", False, 0, 0)
sm.sendDelay(100)
sm.sendDelay(500)
sm.sendNext("#face0#拥有强大威力的魅力红光水晶的名字？有人知道吗？")
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face0##fs12#红榴石。")
sm.setInnerOverrideSpeakerTemplateID(3001300) # Ex
sm.sendSay("#face2#主人,你只有大声点,大家才能听到。")
sm.setInnerOverrideSpeakerTemplateID(3001302) # Professor Kalsat
sm.sendSay("#face0#好吧,卡尼里恩。")
sm.setInnerOverrideSpeakerTemplateID(3001308) # Carnelian
sm.sendSay("#face0#名为#b红榴石#k的矿物,虽然爆发力十足,但却难以提取魔力。")
sm.setInnerOverrideSpeakerTemplateID(3001302) # Professor Kalsat
sm.sendSay("#face0#哈哈,漂亮,干得漂亮。那接下来……")
sm.setMapTaggedObjectVisible("c3_appear", True, 0, 0)
sm.playSound("Sound/SoundEff.img/illium/classroom_crystal", 100)
sm.sendDelay(500)
sm.sendDelay(500)
sm.setMapTaggedObjectVisible("c3_loop", True, 0, 0)
sm.setMapTaggedObjectVisible("c3_appear", False, 0, 0)
sm.sendDelay(100)
sm.sendDelay(500)
sm.sendNext("#face0#莫非你对这水晶……")
sm.setInnerOverrideSpeakerTemplateID(3001300) # Ex
sm.sendSay("#face0##fs24##b黑曜石！#k")
sm.setInnerOverrideSpeakerTemplateID(3001307) # Dean
sm.sendSay("#face2#我的妈,吓死我了！")
sm.setInnerOverrideSpeakerTemplateID(3001300) # Ex
sm.sendSay("#face0#这种散发漆黑光芒的黑水晶不仅难找,还拥有黑暗魔法气息。如果胡乱使用,后果不堪设想。记得格外注意。")
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face3#利、利奥………")
sm.setInnerOverrideSpeakerTemplateID(3001302) # Professor Kalsat
sm.sendSay("#face0#哈哈,太棒了！这机器人可真不错！？")
sm.setSpeakerType(4)
sm.setSpeakerID(3001332) # Professor Kalsat
res = sm.sendAskAccept("#face0#好,我想你都听明白了,那我这就给你下达任务。下课前你需要采集#b10个#i4036163# #t4036163##k！做得到吗？")
sm.startQuest(parentID)
sm.setSpeakerType(3)
sm.sendNext("#face0##b#i4036163##t4036163##k可从#r#o2400400##k那获得。那大家准备好了吗？我会送大家一同出发,看谁能率先返回喽！")
sm.setInnerOverrideSpeakerTemplateID(3001300) # Ex
sm.sendSay("#face0##b回学院的时候,推荐使用冒险岛向导#k(快捷键：U)。")
sm.showFadeTransition(0, 1000, 3000)
sm.zoomCamera(0, 1000, 2147483647, 2147483647, 2147483647)
sm.moveCamera(True, 0, 0, 0)
sm.sendDelay(300)
sm.removeOverlapScreen(1000)
sm.lockInGameUI(False, True)
sm.warp(402000512)
