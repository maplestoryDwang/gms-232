# id 37177 ([Elodin] Practice Always Makes Perfect), field 101084400
sm.setSpeakerID(1501007) # Baby Bird
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(1501010) # Baby Bird
sm.sendNext("嗯，我觉得清凉的水更好喝，甜甜的花更好吃。")
sm.setInnerOverrideSpeakerTemplateID(1501013) # Ruenna the Fairy
sm.sendSay("进展顺利吗？")
sm.setInnerOverrideSpeakerTemplateID(1501010) # Baby Bird
sm.sendSay("你好，鲁安。谢谢你把我的孩子照顾得这么好。")
sm.setInnerOverrideSpeakerTemplateID(1501015) # Shimmer Songbird
sm.sendSay("嗯？那只……鸟是……你的孩子……?不会吧……")
sm.setInnerOverrideSpeakerTemplateID(1501013) # Ruenna the Fairy
sm.sendSay("你好，鲁安。谢谢你把我的孩子照顾得这么好。")
sm.setInnerOverrideSpeakerTemplateID(1501015) # Shimmer Songbird
sm.sendSay("我还担心他会不会受伤，有没有吃饱肚子，没想到你一直在照顾他。\r\n他能长得像现在这样健壮，离不开你的帮助。")
sm.setInnerOverrideSpeakerTemplateID(1501010) # Baby Bird
sm.sendSay("嗯嗯！鲁安很照顾我，给了我很多好吃的！")
sm.setInnerOverrideSpeakerTemplateID(1501013) # Ruenna the Fairy
sm.sendSay("哎呀……真是没想到……你们俩的关系……")
sm.setInnerOverrideSpeakerTemplateID(1501015) # Shimmer Songbird
sm.sendSay("看上去长得很不一样吧？但是这孩子只要努力吃饭，快快长大，就也会拥有这样的羽毛。")
sm.setInnerOverrideSpeakerTemplateID(1501010) # Baby Bird
sm.sendSay("嘿嘿，我想快点长大。")
sm.setInnerOverrideSpeakerTemplateID(1501015) # Shimmer Songbird
sm.sendSay("再次向你表示感谢，鲁安。要不是你……")
sm.setInnerOverrideSpeakerTemplateID(1501013) # Ruenna the Fairy
sm.sendSay("不，身为森林的一员，这是我应该做的。")
sm.setInnerOverrideSpeakerTemplateID(1501010) # Baby Bird
sm.sendSay("对了对了！我又想唱歌了。你来听听看好不好听！")
sm.setInnerOverrideSpeakerTemplateID(1501013) # Ruenna the Fairy
sm.sendSay("好的，让我听听到底有多好听。")
sm.setParam(2)
sm.sendSay("哈……哈……哈……")
sm.lockInGameUI(True, False)
sm.removeAdditionalEffect()
sm.blind(True, 255, 0, 0, 0, 0)
sm.sendDelay(1000)
sm.onLayer(1500, "00", 0, 0, 12, "Effect/Direction21.img/Elodin/sing/0", 4, True, -1, False)
sm.sendDelay(3000)
sm.setParam(5)
sm.sendNext("完全……没有……改善……")
sm.sendSay("我还以为终于可以睡个好觉了呢……")
sm.setParam(3)
sm.sendSay("不过现在好歹能跟上一点节奏了，不是吗？")
sm.setParam(5)
sm.sendSay("鲁安！！！")
sm.sendDelay(3000)
sm.offLayer(500, "00", False)
sm.sendDelay(2000)
sm.blind(False, 0, 0, 0, 0, 1000)
sm.showFadeTransition(0, 1000, 3000)
sm.zoomCamera(0, 1000, 2147483647, 2147483647, 2147483647)
sm.moveCamera(True, 0, 0, 0)
sm.sendDelay(300)
sm.removeOverlapScreen(1000)
sm.moveCamera(True, 0, 0, 0)
sm.lockInGameUI(False, True)
sm.startQuest(parentID)
sm.createQuestWithQRValue(37150, "00=h0;01=h0;02=h0;03=h0;04=h1;07=h1;08=h0")
sm.createQuestWithQRValue(37150, "00=h0;01=h1;02=h0;03=h0;04=h1;07=h1;08=h0")
sm.warp(101000000)
