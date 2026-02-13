# id 22729 (Are Black Cats Unlucky?), field 331001000
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendNext("赶紧过来……等等，你后面那是什么？")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("额！……猫……甚至还是只野猫。\r\n肯定浑身都是细菌和病毒……跳……！说不定还有跳蚤和虱子！\r\n你怎么会带了只野猫回来，多危险啊！赶紧给送回去。")
sm.lockInGameUI(True, False)
sm.changeBGM("Bgm38.img/LifeIsComedy", 0, 0)
sm.sendDelay(1500)
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendNext("啊-！冷静点，杰，你瞧瞧这个小不点的脚，它这么小一只，在那么危险的地方还能逃得出去吗？我要是送它回去它会死的。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face2#你瞧瞧，这家伙也说是啊，你要摸摸它的脚掌嘛？软乎乎的呢？")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face5#额……啊，不要！\r\n总之我知道了，我知道了，不要离我太近。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face5#你为什么……为什么要把那么危险的生物带回来？\r\n我不是让你去带来可以分析怪物的资料嘛。")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face2#啊，提起这个，在这里。")
sm.sendSay("#face6#……那是什么，灰尘？！\r\n这，这个天底下我最讨厌的就是灰尘了。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face8#站住，就在那里，不要再靠近了。\r\n你要是靠过来，我就把这些资料全都初始化。")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face2#来，我想让你再靠近一点看嘛。")
sm.sendSay("#face7##fs30#凯内西斯~~~！！！")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#fn黑体##fs18#第二天,  据点")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face7##fs30#KINESIS!")
sm.blind(True, 255, 0, 0, 0, 500)
sm.sendDelay(500)
sm.blind(True, 255, 0, 0, 0, 0)
sm.sendDelay(1200)
sm.blind(False, 0, 0, 0, 0, 1000)
sm.sendDelay(1400)
sm.sendDelay(3000)
sm.createFieldTextEffect("#fnﾳﾪﾴﾮﾰ￭ﾵ￱ ExtraBold##fs18#The next day, at the hideout", 100, 2500, 4, 0, 0, 1, 4, 0, 0, 0)
sm.completeQuestNoCheck(parentID)
sm.startQuest(11620)
sm.createQuestWithQRValue(15710, "lasttime=19/07/16/05/40")
sm.lockInGameUI(False, True)
