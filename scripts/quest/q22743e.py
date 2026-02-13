# id 22743 (Finding Fanzy), field 101030000
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1040002) # Fanzy
sm.sendNext("喵喵，嗯？你是谁啊喵喵？")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face2#哈哈哈，搞什么啊你，\r\n这里难道是会说话的猫的天堂吗？")
sm.setInnerOverrideSpeakerTemplateID(1040002) # Fanzy
sm.sendSay("咳咳！这股味道……你不是#b这个世界的人类#k啊！")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face3#我也很想知道这到底是怎么一回事，\r\n那位叫汉斯的在哪儿啊？")
sm.setInnerOverrideSpeakerTemplateID(1040002) # Fanzy
sm.sendSay("汉斯刚刚去了。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face4#哎哟……怎么就。")
sm.setInnerOverrideSpeakerTemplateID(1040002) # Fanzy
sm.sendSay("我，我不是那个意思！\r\n我的意思是他刚刚去了魔法师协会！你不是刚从那里过来吗？")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face2#搞什么，是这个意思啊？看来是我会错意了。")
sm.setInnerOverrideSpeakerTemplateID(1040002) # Fanzy
sm.sendSay("话说回来，你能听我说两句吗？我们协会有个叫#b库迪#k的徒弟很有可能在森林里迷路了，我总觉得有点……")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face4#等下，这里魔法师的问题不归我管，\r\n我想赶紧回到原来的世界去。")
sm.setInnerOverrideSpeakerTemplateID(1040002) # Fanzy
sm.sendSay("…………也对，就算我跟个异邦人说了，也不会帮我的忙的。")
sm.sendSay("话说回来你这身衣服是什么鬼啊？实在是看不下去了，这个给你好吧？\r\n\r\n#b#i1082020#  #t1082020#")
sm.completeQuestNoCheck(parentID)
sm.completeQuestNoCheck(parentID)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face2#看上去好像还挺管用啊？谢谢啦。")
sm.setInnerOverrideSpeakerTemplateID(1040002) # Fanzy
sm.sendSay("哼，没什么的。\r\n赶紧回到你所在的世界吧。")
sm.warp(101020400)
